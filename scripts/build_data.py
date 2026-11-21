# -*- coding: utf-8 -*-
"""把两份题库解析成 data/banks.js（浏览器可直接加载，无需服务器）"""
import json
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from parse_excel import parse as parse_excel  # noqa: E402
from parse_pdf import parse as parse_pdf      # noqa: E402

DL = 'C:/Users/EZO2SZH/Downloads'
OUT = os.path.join(os.path.dirname(__file__), '..', 'data', 'banks.js')


def to_items(prefix, qs):
    items = []
    for i, q in enumerate(qs, 1):
        answer = q['answer']
        notes = q.get('notes', '')
        ref = q.get('ref', [])
        items.append({
            'id': f'{prefix}{i}',
            'q': q['q'],
            'options': q['options'],
            'answer': answer,
            'multi': len(answer) > 1,
            'notes': notes,
            'ref': ref,
        })
    return items


def main():
    excel = to_items('x', parse_excel(f'{DL}/CAD 题库 122.xlsx'))
    pdf = to_items('p', parse_pdf(f'{DL}/CAD 题库 151.pdf'))
    banks = [
        {'id': 'excel', 'name': 'CAD 题库 122', 'source': 'Excel', 'questions': excel},
        {'id': 'pdf', 'name': 'CAD 题库 151', 'source': 'PDF', 'questions': pdf},
    ]
    js = '// 由 scripts/build_data.py 自动生成\nwindow.BANKS = ' + json.dumps(banks, ensure_ascii=False, indent=1) + ';\n'
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(js)
    print('excel', len(excel), 'pdf', len(pdf), '->', os.path.normpath(OUT))


if __name__ == '__main__':
    main()
