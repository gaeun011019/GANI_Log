"""GANI-Log-화면설계서.md를 output/pdf/GANI_Log_화면_설계서.pdf로 변환한다.

`### 화면 와이어프레임` 아래의 스크린샷 위에 디스크립션 표의 NO와 대응하는
파란 번호 배지를 직접 그려 넣는다. 배지 좌표는 MARKERS 딕셔너리에서
화면 ID별로 관리하며, 각 스크린샷의 좌상단을 (0, 0), 우하단을 (1, 1)로 보는
비율 좌표다. 화면 와이어프레임(docs/screenshots/*.png)이나 디스크립션 표의
UI 요소 순서가 바뀌면 이 좌표도 함께 맞춰야 한다.

의존성: reportlab, Pillow (`pip install reportlab pillow`)
실행: python3 generate_screen_design_pdf.py <입력 md> <출력 pdf>
예시: python3 scripts/generate_screen_design_pdf.py \
    "GANI-Log-화면설계서.md" "output/pdf/GANI_Log_화면_설계서.pdf"
"""

import re
import sys
from pathlib import Path

from PIL import Image as PILImage
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Image, Paragraph, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle

FONT = "/System/Library/Fonts/Supplemental/AppleGothic.ttf"
FONT_NAME = "AppleGothic"
NAVY = colors.HexColor("#153A5B")
BLUE = colors.HexColor("#2E75B6")
PALE = colors.HexColor("#EAF3FA")
GRID = colors.HexColor("#C9D2DA")
TEXT = colors.HexColor("#202830")
MUTED = colors.HexColor("#64717C")
W, H = landscape(A4)

# 와이어프레임 이미지의 좌상단을 (0, 0), 우하단을 (1, 1)로 본 UI 번호 위치.
# 각 화면의 실제 스크린샷을 기준으로 디스크립션 표의 NO 순서와 좌표를 맞춤 보정함.
MARKERS = {
    "SCR-AUTH-001": [(0.385,0.367),(0.385,0.430),(0.385,0.560),(0.548,0.601)],
    "SCR-AUTH-002": [(0.385,0.335),(0.385,0.405),(0.385,0.473),(0.50,0.535),(0.545,0.575)],
    "SCR-SYNC-001": [(0.345,0.218),(0.36,0.318),(0.36,0.381),(0.36,0.445),(0.40,0.564),(0.60,0.564)],
    "SCR-LOG-001": [(0.18,0.08),(0.18,0.14),(0.42,0.23),(0.18,0.36),(0.28,0.36)],
    "SCR-LOG-002": [(0.19,0.105),(0.48,0.152),(0.48,0.105),(0.19,0.152),(0.19,0.255),(0.48,0.205),(0.19,0.305),(0.19,0.44),(0.19,0.585),(0.19,0.675),(0.19,0.79),(0.20,0.833)],
    "SCR-LOG-003": [(0.19,0.086),(0.19,0.15),(0.19,0.61),(0.19,0.562),(0.25,0.61)],
    "SCR-MAIN-001": [(0.93,0.043),(0.18,0.12),(0.20,0.22),(0.65,0.20),(0.03,0.09)],
    "SCR-LOG-004": [(0.77,0.04),(0.97,0.04),(0.19,0.155),(0.19,0.20)],
    "SCR-LOG-005": [(0.19,0.03),(0.19,0.08),(0.19,0.16),(0.19,0.213),(0.51,0.213),(0.19,0.296),(0.19,0.358),(0.19,0.418),(0.55,0.418),(0.19,0.563),(0.19,0.615),(0.55,0.615)],
    "SCR-EQP-001": [(0.91,0.04),(0.18,0.12),(0.6,0.22)],
    "SCR-MY-001": [(0.19,0.08),(0.19,0.106),(0.19,0.156),(0.19,0.212),(0.19,0.284),(0.19,0.352)],
    "SCR-SOCIAL-001": [(0.18,0.13),(0.60,0.13),(0.18,0.28),(0.18,0.47)],
    "SCR-SOCIAL-002": [(0.91,0.055),(0.18,0.12)],
}


def cells(line):
    return [x.strip() for x in line.strip().strip("|").split("|")]


def parse(source):
    text = Path(source).read_text(encoding="utf-8")
    sections = re.split(r"(?=^## 7\.\d+\s)", text, flags=re.M)[1:]
    result = []
    for section in sections:
        heading = re.search(r"^##\s+7\.\d+\s+(SCR-[^\s]+)\s+(.+)$", section, re.M)
        image = re.search(r"!\[[^]]*\]\(([^)]+)\)", section)
        info_match = re.search(r"### 기본 정보\s*\n\n((?:\|.*\n)+)", section)
        desc_match = re.search(r"### (?:디스크립션|입력 항목)\s*\n\n((?:\|.*\n)+)", section)
        exception_match = re.search(r"### (?:예외 처리|빈 상태 및 예외 처리|공통 안내)\s*\n\n(.*?)(?=\n## |\Z)", section, re.S)
        info = []
        if info_match:
            rows = [cells(x) for x in info_match.group(1).splitlines()]
            info = [r for r in rows[2:] if len(r) >= 2]
        desc = []
        if desc_match:
            rows = [cells(x) for x in desc_match.group(1).splitlines()]
            desc = [r for r in rows if not all(re.fullmatch(r":?-{3,}:?", x) for x in r)]
        notes = []
        if exception_match:
            notes = [x[2:].strip() for x in exception_match.group(1).splitlines() if x.strip().startswith("- ")]
        result.append({
            "id": heading.group(1), "name": heading.group(2).strip(),
            "image": str((Path(source).parent / image.group(1)).resolve()),
            "info": info, "desc": desc, "notes": notes,
        })
    return result


def p(text, size=6.2, color=TEXT, leading=None, align=0):
    return Paragraph(str(text), ParagraphStyle(
        "cell", fontName=FONT_NAME, fontSize=size, leading=leading or size * 1.35,
        textColor=color, alignment=align, wordWrap="CJK",
    ))


def draw_table(c, data, widths, x, top, max_height=None, header=True, font_size=6.2):
    rows = [[p(v, font_size, colors.white if header and ri == 0 else TEXT,
                align=1 if header and ri == 0 else 0) for v in row] for ri, row in enumerate(data)]
    table = Table(rows, colWidths=widths, repeatRows=1 if header else 0)
    cmds = [("GRID", (0, 0), (-1, -1), 0.35, GRID),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 3), ("RIGHTPADDING", (0, 0), (-1, -1), 3),
            ("TOPPADDING", (0, 0), (-1, -1), 2.5), ("BOTTOMPADDING", (0, 0), (-1, -1), 2.5)]
    if header:
        cmds.append(("BACKGROUND", (0, 0), (-1, 0), NAVY))
    for i in range(1 if header else 0, len(rows)):
        if i % 2 == 0:
            cmds.append(("BACKGROUND", (0, i), (-1, i), PALE))
    table.setStyle(TableStyle(cmds))
    tw, th = table.wrap(sum(widths), max_height or H)
    table.drawOn(c, x, top - th)
    return th


def draw_cover(c):
    c.setFillColor(NAVY); c.rect(0, H - 38 * mm, W, 38 * mm, fill=1, stroke=0)
    c.setFillColor(colors.white); c.setFont(FONT_NAME, 24); c.drawString(20 * mm, H - 24 * mm, "GANI Log 화면 설계서")
    c.setFillColor(TEXT); c.setFont(FONT_NAME, 12); c.drawString(20 * mm, H - 57 * mm, "화면 와이어프레임 및 UI 동작 정의")
    info = [["프로젝트명", "GANI Log"], ["작성자", "김가은"], ["작성일 / 최종 수정일", "2026-08-19"], ["버전", "v1.8"], ["대상 환경", "웹 데스크톱, 1280px 기준"]]
    draw_table(c, info, [52 * mm, 100 * mm], 20 * mm, H - 72 * mm, header=False, font_size=8)
    c.setFillColor(MUTED); c.setFont(FONT_NAME, 7.5); c.drawString(20 * mm, 18 * mm, "와이어프레임은 화면 구조와 흐름 확인용 설계 예시이며 실제 구현 완료 화면이 아닙니다.")
    c.showPage()


def draw_screen(c, screen, page_no):
    margin = 10 * mm
    c.setFillColor(NAVY); c.rect(0, H - 18 * mm, W, 18 * mm, fill=1, stroke=0)
    c.setFillColor(colors.white); c.setFont(FONT_NAME, 14)
    c.drawString(margin, H - 12 * mm, f"{screen['id']}  {screen['name']}")
    depth = next((v for k, v in screen["info"] if k == "이동 경로"), "화면 흐름 참조")
    meta = [["화면 ID", screen["id"], "작성자", "김가은", "버전", "v1.8"],
            ["화면명", screen["name"], "작성일", "2026-08-19", "최종 수정일", "2026-08-19"],
            ["depth / 이동", depth, "관련 요구사항", next((v for k, v in screen["info"] if k == "관련 요구사항"), "-"), "페이지", str(page_no)]]
    draw_table(c, meta, [19*mm, 70*mm, 20*mm, 40*mm, 22*mm, 55*mm], margin, H - 22*mm, header=False, font_size=5.8)

    left_x, left_w = margin, 122 * mm
    right_x, right_w = 138 * mm, W - 148 * mm
    top = H - 48 * mm
    c.setFillColor(BLUE); c.setFont(FONT_NAME, 9); c.drawString(left_x, top, "화면 와이어프레임")
    img = PILImage.open(screen["image"])
    max_w, max_h = left_w, 128 * mm
    scale = min(max_w / img.width, max_h / img.height)
    draw_w, draw_h = img.width * scale, img.height * scale
    pic = Image(screen["image"], width=draw_w, height=draw_h)
    image_x = left_x + (left_w - draw_w) / 2
    image_y = top - 4*mm - draw_h
    pic.drawOn(c, image_x, image_y)
    for number, (nx, ny) in enumerate(MARKERS.get(screen["id"], []), start=1):
        marker_x = image_x + nx * draw_w
        marker_y = image_y + (1 - ny) * draw_h
        c.setFillColor(BLUE)
        c.setStrokeColor(colors.white)
        c.setLineWidth(0.8)
        c.circle(marker_x, marker_y, 2.5 * mm, fill=1, stroke=1)
        c.setFillColor(colors.white)
        c.setFont(FONT_NAME, 5.4 if number < 10 else 4.8)
        c.drawCentredString(marker_x, marker_y - 1.7, str(number))
    c.setStrokeColor(GRID); c.rect(left_x, top - 4*mm - max_h, left_w, max_h, fill=0, stroke=1)
    c.setFillColor(MUTED); c.setFont(FONT_NAME, 5.8)
    c.drawString(left_x, 12 * mm, "파란 번호는 우측 디스크립션 표의 NO와 대응합니다.")

    c.setFillColor(BLUE); c.setFont(FONT_NAME, 9); c.drawString(right_x, top, "기본 정보")
    info_data = [["항목", "내용"]] + screen["info"]
    info_h = draw_table(c, info_data, [31*mm, right_w-31*mm], right_x, top - 3*mm, header=True, font_size=5.7)
    desc_top = top - 7*mm - info_h
    c.setFillColor(BLUE); c.setFont(FONT_NAME, 9); c.drawString(right_x, desc_top, "디스크립션")
    desc = screen["desc"] or [["NO", "UI 요소", "동작 정의"], ["-", "-", "별도 입력 항목 표 참조"]]
    col_count = len(desc[0])
    if col_count == 5:
        widths = [9*mm, 25*mm, 28*mm, right_w-84*mm, 22*mm]
    elif col_count == 4:
        widths = [10*mm, 32*mm, right_w-70*mm, 28*mm]
    else:
        widths = [right_w/col_count] * col_count
    desc_h = draw_table(c, desc, widths, right_x, desc_top - 3*mm, header=True, font_size=5.0)
    note_top = desc_top - 7*mm - desc_h
    if screen["notes"] and note_top > 18*mm:
        c.setFillColor(BLUE); c.setFont(FONT_NAME, 8); c.drawString(right_x, note_top, "예외 처리 및 공통 규칙")
        note_text = "<br/>".join(f"• {x}" for x in screen["notes"])
        box = Table([[p(note_text, 5.5, TEXT)]], colWidths=[right_w])
        box.setStyle(TableStyle([("BACKGROUND", (0,0),(-1,-1), colors.HexColor("#F5F6F7")), ("BOX",(0,0),(-1,-1),0.4,GRID), ("LEFTPADDING",(0,0),(-1,-1),5), ("RIGHTPADDING",(0,0),(-1,-1),5), ("TOPPADDING",(0,0),(-1,-1),4), ("BOTTOMPADDING",(0,0),(-1,-1),4)]))
        _, nh = box.wrap(right_w, note_top - 14*mm); box.drawOn(c, right_x, note_top - 3*mm - nh)
    c.setFillColor(MUTED); c.setFont(FONT_NAME, 6); c.drawRightString(W - margin, 7*mm, str(page_no))
    c.showPage()


def main(source, output):
    pdfmetrics.registerFont(TTFont(FONT_NAME, FONT))
    c = canvas.Canvas(output, pagesize=landscape(A4))
    c.setTitle("GANI Log 화면 설계서")
    c.setAuthor("김가은")
    c.setSubject("GANI Log 프로젝트 산출물")
    draw_cover(c)
    for i, screen in enumerate(parse(source), start=2):
        draw_screen(c, screen, i)
    c.save()


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("usage: generate_screen_design_pdf.py <입력 md> <출력 pdf>")
    main(sys.argv[1], sys.argv[2])
