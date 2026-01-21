from __future__ import annotations

import re
from pathlib import Path

import pandas as pd
from bs4 import BeautifulSoup

#python3 -m pip install openpyxl pandas beautifulsoup4 lxml
#python3 peg-standard/scripts/mdx_tables_to_excel.py
ROOT = Path(__file__).resolve().parents[1]

INPUTS = [
    ROOT / "docs" / "peg-matrix" / "peg-matrix.md",
    ROOT / "docs" / "peg-metadata" / "peg-metadata.md",
    ROOT / "docs" / "peg-list.md",
]

OUT_DIR = ROOT / "static" / "downloads" / "standard"
OUT_TSV = OUT_DIR / "peg_tables.tsv"
OUT_XLSX = OUT_DIR / "peg_tables.xlsx"


def strip_text(el) -> str:
    if el is None:
        return ""
    txt = el.get_text(" ", strip=True)
    return re.sub(r"\s+", " ", txt).strip()


def find_nearest_heading(text: str, pos: int) -> str:
    before = text[:pos]
    matches = list(re.finditer(r"(?m)^(#{1,6})\s+(.+?)\s*$", before))
    return matches[-1].group(2).strip() if matches else ""


def find_tab_labels(text: str, pos: int) -> tuple[str, str]:
    before = text[:pos]
    labels = re.findall(r'<TabItem\b[^>]*\blabel="([^"]+)"', before)
    outer = labels[-2] if len(labels) >= 2 else (labels[-1] if labels else "")
    inner = labels[-1] if labels else ""
    return outer, inner


HEADER_MAP = {
    "field": "Field",
    "description": "Description",
    "mandatory": "Requirement",
    "requirement": "Requirement",
    "data_format": "Data_format",
    "data format": "Data_format",
    "data_format / allowed values": "Data_format",
    "data format / allowed values": "Data_format",
    "example": "Example",
    "example data": "Example",
    "column header": "Field",
    "column_name": "Field",
    "column description": "Description",
}


def normalise_header(h: str) -> str:
    key = re.sub(r"\s+", " ", h.strip().lower())
    return HEADER_MAP.get(key, h.strip() or "col")


def extract_table_rows(table_html: str) -> tuple[list[str], list[list[str]]]:
    soup = BeautifulSoup(table_html, "html.parser")
    table = soup.find("table")
    if table is None:
        return [], []

    headers = [strip_text(th) for th in table.select("thead th")]
    if not headers:
        first_tr = table.find("tr")
        if first_tr:
            headers = [strip_text(th) for th in first_tr.find_all("th")]

    all_trs = table.find_all("tr")
    data_trs = all_trs[1:] if headers and all_trs else all_trs

    rows: list[list[str]] = []
    for tr in data_trs:
        cells = tr.find_all(["td", "th"])
        vals = [strip_text(c) for c in cells]
        if any(vals):
            rows.append(vals)

    if not headers and rows:
        headers = [f"col_{i+1}" for i in range(len(rows[0]))]

    norm_rows = []
    for r in rows:
        if len(r) < len(headers):
            r = r + [""] * (len(headers) - len(r))
        if len(r) > len(headers):
            r = r[: len(headers)]
        norm_rows.append(r)

    return headers, norm_rows


def parse_one_file(path: Path) -> pd.DataFrame:
    text = path.read_text(encoding="utf-8")

    records: list[dict] = []
    for i, m in enumerate(re.finditer(r"<table\b.*?</table>", text, flags=re.DOTALL | re.IGNORECASE), start=1):
        table_html = m.group(0)
        start = m.start()

        outer_tab, inner_tab = find_tab_labels(text, start)
        section = find_nearest_heading(text, start)

        headers, rows = extract_table_rows(table_html)
        if not headers or not rows:
            continue

        headers_norm = [normalise_header(h) for h in headers]

        for row in rows:
            rec = dict(zip(headers_norm, row))
            rec.update(
                {
                    "source_file": str(path.relative_to(ROOT).as_posix()),
                    "section_heading": section,
                    "outer_tab": outer_tab,
                    "inner_tab": inner_tab,
                    "table_index_in_file": i,
                }
            )
            records.append(rec)

    return pd.DataFrame(records)


def write_outputs(df: pd.DataFrame) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    # Column order (only keep those that exist, plus any extras at the end)
    preferred = [
        "source_file",
        "section_heading",
        "outer_tab",
        "inner_tab",
        "Field",
        "Description",
        "Requirement",
        "Data_format",
        "Example",
        "table_index_in_file",
    ]
    cols = [c for c in preferred if c in df.columns] + [c for c in df.columns if c not in preferred]
    df = df[cols]

    df.to_csv(OUT_TSV, sep="\t", index=False)

    with pd.ExcelWriter(OUT_XLSX, engine="openpyxl") as writer:
        df.to_excel(writer, index=False, sheet_name="all_tables")

        # Sheets per source file (nice + predictable)
        for src, sub in df.groupby("source_file", dropna=False):
            name = Path(str(src)).stem  # e.g. peg-matrix, peg-metadata, peg-list
            name = re.sub(r"[^A-Za-z0-9 _-]+", "", name)[:31] or "tables"
            sub.to_excel(writer, index=False, sheet_name=name)

    print(f"Wrote:\n  {OUT_TSV}\n  {OUT_XLSX}\nRows: {len(df)}")


def main() -> int:
    missing = [p for p in INPUTS if not p.exists()]
    if missing:
        print("ERROR: missing expected input files:")
        for p in missing:
            print(f" - {p}")
        return 1

    frames = []
    for p in INPUTS:
        df = parse_one_file(p)
        if not df.empty:
            frames.append(df)

    if not frames:
        print("No tables found in the three fixed input files.")
        return 1

    df_all = pd.concat(frames, ignore_index=True)
    write_outputs(df_all)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
