# -*- coding: utf-8 -*-
"""解析 'CAD 题库 122.xlsx'。
该表由两段组成：
  A 段：'未回答' 格式，正确选项前一行为 'Correct answer'（单选）或 'Correct selection'（多选）
  B 段：'正解' 格式，正确选项前一行为 'Correct answer' 或 'Your selection is correct'
每题的选项与补充说明以一个空单元格分隔。
"""
import re
import sys
import openpyxl

MARKERS = {'Correct answer', 'Correct selection', 'Your selection is correct'}
LETTERS = [chr(65 + i) for i in range(26)]


def clean(s):
    s = str(s).replace('_xludf.', '')
    if s.startswith('='):          # 数组公式残留的文本，去掉前导 '='
        s = s[1:]
    return s.strip()


def parse(path):
    ws = openpyxl.load_workbook(path, data_only=True).worksheets[0]
    rows = [clean(r[0]) if r[0] is not None else '' for r in ws.iter_rows(values_only=True)]
    starts = [i for i, r in enumerate(rows) if re.match(r'^問題\d+$', r)]
    questions = []
    for k, s in enumerate(starts):
        e = starts[k + 1] if k + 1 < len(starts) else len(rows)
        blk = rows[s:e]
        while blk and blk[-1] == '':
            blk.pop()
        section = 'A' if blk[1] == '未回答' else 'B'
        qtext = blk[2]
        body = blk[3:]
        sep = body.index('') if '' in body else len(body)
        opts_raw = body[:sep]
        notes = [n for n in body[sep + 1:] if n]

        # 把选项 + 正确标记整理成 (文本, 是否正确)
        items, mark = [], False
        for x in opts_raw:
            if x in MARKERS or x == '正解':
                mark = True
                continue
            if x:
                items.append((x, mark))
            mark = False

        # 'a) ...' 形式的陈述项属于题干，移入题干文本
        stmts = []
        while len(items) > 4 and re.match(r'^[a-h]\) ', items[0][0]):
            stmts.append(items.pop(0)[0])
        if stmts:
            qtext = qtext + '\n' + '\n'.join(stmts)

        answer = [LETTERS[i] for i, (_, ok) in enumerate(items) if ok]
        questions.append({
            'no': len(questions) + 1,
            'section': section,
            'excelNo': int(re.search(r'\d+', blk[0]).group()),
            'q': qtext,
            'options': [{'k': LETTERS[i], 't': t} for i, (t, _) in enumerate(items)],
            'answer': answer,
            'notes': '\n'.join(notes),
        })
    return questions


if __name__ == '__main__':
    from collections import Counter
    qs = parse(sys.argv[1])
    print('total', len(qs), Counter(q['section'] for q in qs))
    print('options', Counter(len(q['options']) for q in qs))
    print('answers', Counter(len(q['answer']) for q in qs))
    for q in qs:
        if not q['answer'] or len(q['options']) < 2:
            print('WARN', q['no'], q['excelNo'], q['q'][:60], len(q['options']), q['answer'])
