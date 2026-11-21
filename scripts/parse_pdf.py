# -*- coding: utf-8 -*-
"""解析 'CAD 题库 151.pdf'（ExamTopics 风格：Question #N / A. B. C. D. / Correct Answer: X）"""
import re
import subprocess
import sys
import tempfile
import shutil

OPT_RE = re.compile(r'^\s*([A-H])\.\s+(.*\S)\s*$')
HDR_RE = re.compile(r'^Question #(\d+)\s*(Topic.*)?$')
ANS_RE = re.compile(r'Correct Answer:\s*([A-H]+)')


def pdf_text(path):
    # 中文路径下 pdftotext 可能读不了，先复制到临时英文路径
    tmp = tempfile.mktemp(suffix='.pdf')
    shutil.copy(path, tmp)
    out = subprocess.run(['pdftotext', '-layout', tmp, '-'], capture_output=True)
    return out.stdout.decode('utf-8', errors='replace')


def parse(path):
    lines = pdf_text(path).splitlines()
    # 每个 'Question #N' 作为题目起点
    idx = [i for i, l in enumerate(lines) if HDR_RE.match(l)]
    questions = []
    for k, s in enumerate(idx):
        e = idx[k + 1] if k + 1 < len(idx) else len(lines)
        no = int(HDR_RE.match(lines[s]).group(1))
        blk = lines[s + 1:e]
        # 截断到 'Community vote distribution' 之前的正文
        ans_i = next((i for i, l in enumerate(blk) if 'Correct Answer:' in l), None)
        if ans_i is None:
            questions.append({'no': no, 'q': '', 'options': [], 'answer': [], 'ref': [], 'error': 'no answer'})
            continue
        head = blk[:ans_i]
        # 题干：第一个选项行之前的非空文字
        first_opt = next((i for i, l in enumerate(head) if OPT_RE.match(l)), len(head))
        qlines = [l.strip() for l in head[:first_opt] if l.strip()]
        qtext = ' '.join(qlines)
        # 题干中挤在一行的 'a) ... b) ...' 陈述项拆成多行
        if len(re.findall(r'(?:^|\s)[a-h]\)\s', qtext)) >= 2:
            qtext = re.sub(r'\s+(?=[a-h]\)\s)', '\n', qtext).strip()

        options = []
        for l in head[first_opt:]:
            m = OPT_RE.match(l)
            if m:
                options.append({'k': m.group(1), 't': m.group(2).strip()})
            elif l.strip() and options:
                # 换行的选项续行
                options[-1]['t'] += ' ' + l.strip()

        ans_line = blk[ans_i]
        am = ANS_RE.search(ans_line)
        answer = list(am.group(1)) if am else []

        # 参考链接（Reference:）可能跨行，需要拼接
        ref_text = []
        ref_started = False
        for l in blk[ans_i:]:
            if 'Community vote distribution' in l or l.strip().startswith('Topic 1'):
                break
            if 'Reference:' in l:
                ref_started = True
                l = l.split('Reference:', 1)[1]
            if ref_started and l.strip():
                ref_text.append(l.strip())
        joined = ''
        for part in ref_text:
            joined += part if joined.endswith('-') else (' ' + part if joined else part)
        refs = re.findall(r'https?://\S+', joined)

        questions.append({
            'no': no,
            'q': qtext,
            'options': options,
            'answer': answer,
            'ref': refs,
        })
    return questions


if __name__ == '__main__':
    from collections import Counter
    qs = parse(sys.argv[1])
    print('total', len(qs))
    print('options', Counter(len(q['options']) for q in qs))
    print('answers', Counter(len(q['answer']) for q in qs))
    for q in qs:
        if not q['answer'] or len(q['options']) < 2 or not q['q']:
            print('WARN', q['no'], q['q'][:60], len(q['options']), q['answer'], q.get('error'))
    print('answers raw', Counter(''.join(q['answer']) for q in qs))
