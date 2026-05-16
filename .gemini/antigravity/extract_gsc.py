
import zipfile
import xml.etree.ElementTree as ET
import os

def extract_xlsx(file_path):
    with zipfile.ZipFile(file_path, 'r') as z:
        shared_strings = []
        try:
            with z.open('xl/sharedStrings.xml') as f:
                tree = ET.parse(f)
                for si in tree.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}si'):
                    t = si.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t')
                    if t is not None:
                        shared_strings.append(t.text or "")
                    else:
                        text = "".join([r.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t').text or "" for r in si.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}r') if r.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t') is not None])
                        shared_strings.append(text)
        except KeyError:
            pass

        def get_value(c):
            v = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
            if v is None: return ""
            t = c.get('t')
            if t == 's':
                try:
                    return shared_strings[int(v.text)]
                except:
                    return v.text or ""
            return v.text or ""

        report = ""
        for sheet_id, sheet_name in [('sheet2', 'Queries'), ('sheet3', 'Pages'), ('sheet1', 'Summary')]:
            file_name = f'xl/worksheets/{sheet_id}.xml'
            try:
                with z.open(file_name) as f:
                    report += f"\n--- {sheet_name} ({file_name}) ---\n"
                    tree = ET.parse(f)
                    root = tree.getroot()
                    sheet_data = root.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheetData')
                    for i, row in enumerate(sheet_data.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row')):
                        if i > 40: break
                        cols = [str(get_value(c)) for c in row.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c')]
                        report += " | ".join(cols) + "\n"
            except KeyError:
                report += f"Sheet {file_name} not found\n"
        
        with open("/Users/stuartmarsden/crosswindcalculator.com/.gemini/antigravity/gsc_report.txt", "w") as f:
            f.write(report)

if __name__ == "__main__":
    file_path = "/Users/stuartmarsden/Downloads/https___www.crosswindcalculator.com_-Performance-on-Search-2026-05-16.xlsx"
    extract_xlsx(file_path)
