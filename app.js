(function () {
  'use strict';

  var BANKS = window.BANKS || [];
  var KEY_PREFIX = 'cadquiz.v1.';
  var app = document.getElementById('app');

  var state = {
    view: 'home',      // home | quiz
    bankId: null,
    filter: 'all',     // all | todo | wrong
    shuffle: false,
    order: [],         // 当前列表中的题目下标（相对 bank.questions）
    pos: 0,            // 当前在 order 中的位置
    picked: [],        // 当前题已选字母
    revealed: false,   // 当前题是否已作答并显示结果
    results: {}        // { questionId: { ok, picked } }
  };

  /* ---------- 工具 ---------- */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // 转义后再把 URL 变成链接
  function linkify(text) {
    return esc(text).replace(/(https?:\/\/[^\s<]+)/g, function (u) {
      return '<a href="' + u + '" target="_blank" rel="noopener">' + u + '</a>';
    });
  }

  function currentBank() {
    for (var i = 0; i < BANKS.length; i++) if (BANKS[i].id === state.bankId) return BANKS[i];
    return null;
  }

  function loadResults(bankId) {
    try { return JSON.parse(localStorage.getItem(KEY_PREFIX + bankId)) || {}; }
    catch (e) { return {}; }
  }

  function saveResults() {
    try { localStorage.setItem(KEY_PREFIX + state.bankId, JSON.stringify(state.results)); }
    catch (e) { /* 无痕模式等情况下忽略 */ }
  }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var sa = a.slice().sort().join('');
    var sb = b.slice().sort().join('');
    return sa === sb;
  }

  function shuffled(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function stats(bank) {
    var r = loadResults(bank.id);
    var done = 0, ok = 0;
    Object.keys(r).forEach(function (id) { done++; if (r[id].ok) ok++; });
    return { done: done, ok: ok, wrong: done - ok, total: bank.questions.length };
  }

  /* ---------- 列表 ---------- */

  function buildOrder() {
    var bank = currentBank();
    var idx = [];
    bank.questions.forEach(function (q, i) {
      var r = state.results[q.id];
      if (state.filter === 'todo' && r) return;
      if (state.filter === 'wrong' && !(r && !r.ok)) return;
      idx.push(i);
    });
    state.order = state.shuffle ? shuffled(idx) : idx;
    state.pos = 0;
    loadCurrent();
  }

  function currentQuestion() {
    var bank = currentBank();
    if (!bank || !state.order.length) return null;
    return bank.questions[state.order[state.pos]];
  }

  // 切换到当前位置的题目：如果做过，直接显示结果
  function loadCurrent() {
    var q = currentQuestion();
    var r = q && state.results[q.id];
    state.picked = r ? r.picked.slice() : [];
    state.revealed = !!r;
  }

  /* ---------- 动作 ---------- */

  function openBank(id) {
    state.view = 'quiz';
    state.bankId = id;
    state.results = loadResults(id);
    state.filter = 'all';
    buildOrder();
    render();
    window.scrollTo(0, 0);
  }

  function goHome() {
    state.view = 'home';
    render();
  }

  function pick(letter) {
    var q = currentQuestion();
    if (!q || state.revealed) return;
    if (q.multi) {
      var i = state.picked.indexOf(letter);
      if (i >= 0) state.picked.splice(i, 1); else state.picked.push(letter);
      state.picked.sort();
      render();
    } else {
      state.picked = [letter];
      submit();
    }
  }

  function submit() {
    var q = currentQuestion();
    if (!q || state.revealed || !state.picked.length) return;
    var ok = sameSet(state.picked, q.answer);
    state.results[q.id] = { ok: ok, picked: state.picked.slice() };
    saveResults();
    state.revealed = true;
    render();
  }

  function retry() {
    state.picked = [];
    state.revealed = false;
    render();
  }

  function go(delta) {
    var n = state.pos + delta;
    if (n < 0 || n >= state.order.length) return;
    state.pos = n;
    loadCurrent();
    render();
    window.scrollTo(0, 0);
  }

  function jumpTo(value) {
    var n = parseInt(value, 10);
    if (!n || n < 1 || n > state.order.length) return;
    state.pos = n - 1;
    loadCurrent();
    render();
  }

  function setFilter(f) {
    state.filter = f;
    buildOrder();
    render();
  }

  function toggleShuffle() {
    state.shuffle = !state.shuffle;
    buildOrder();
    render();
  }

  function resetProgress() {
    if (!window.confirm('确定清空本题库的所有答题记录吗？')) return;
    state.results = {};
    saveResults();
    buildOrder();
    render();
  }

  /* ---------- 渲染 ---------- */

  function renderHome() {
    var cards = BANKS.map(function (b) {
      var s = stats(b);
      var pct = s.total ? Math.round(s.done / s.total * 100) : 0;
      var acc = s.done ? Math.round(s.ok / s.done * 100) + '%' : '—';
      return '' +
        '<button class="bank" data-bank="' + esc(b.id) + '">' +
          '<div class="bank-head">' +
            '<span class="bank-name">' + esc(b.name) + '</span>' +
            '<span class="bank-src">' + s.total + ' 题 · ' + esc(b.source) + '</span>' +
          '</div>' +
          '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
          '<div class="bank-stat">' +
            '<span>已做 <b>' + s.done + '</b> / ' + s.total + '</span>' +
            '<span>正确率 <b>' + acc + '</b></span>' +
            '<span>错题 <b>' + s.wrong + '</b></span>' +
          '</div>' +
        '</button>';
    }).join('');

    app.innerHTML = '' +
      '<div class="wrap home">' +
        '<h1>CAD 刷题</h1>' +
        '<p class="sub">ServiceNow Certified Application Developer 练习</p>' +
        '<div class="bank-list">' + cards + '</div>' +
      '</div>';
  }

  function renderQuiz() {
    var bank = currentBank();
    var s = stats(bank);
    var total = state.order.length;
    var q = currentQuestion();
    var wrongCount = s.wrong;

    var seg = [
      ['all', '全部'],
      ['todo', '未做'],
      ['wrong', '错题 ' + wrongCount]
    ].map(function (f) {
      return '<button data-filter="' + f[0] + '" class="' + (state.filter === f[0] ? 'on' : '') + '">' + f[1] + '</button>';
    }).join('');

    var header = '' +
      '<div class="topbar">' +
        '<button class="link" data-act="home">← 题库列表</button>' +
        '<span class="title">' + esc(bank.name) + '</span>' +
        '<span class="progress">已做 ' + s.done + ' / ' + s.total + '</span>' +
        '<button class="link" data-act="reset">重置</button>' +
      '</div>';

    var tools = '' +
      '<div class="tools">' +
        '<div class="seg">' + seg + '</div>' +
        '<label class="toggle"><input type="checkbox" data-act="shuffle"' + (state.shuffle ? ' checked' : '') + '> 随机顺序</label>' +
        '<div class="jump">' +
          '<input type="number" min="1" max="' + Math.max(total, 1) + '" id="jumpInput" placeholder="题号">' +
          '<button data-act="jump">跳转</button>' +
        '</div>' +
      '</div>';

    var body;
    if (!q) {
      var msg = state.filter === 'wrong' ? '没有错题，继续保持！' :
                state.filter === 'todo' ? '这个题库已全部做完 🎉' : '没有题目';
      body = '<div class="card empty">' + msg + '</div>';
    } else {
      body = renderCard(q, total) + renderPager(total);
    }

    app.innerHTML = '<div class="wrap">' + header + tools + body + '</div>';
  }

  function renderCard(q, total) {
    var letters = q.options.map(function (o) { return o.k; });
    var opts = q.options.map(function (o) {
      var cls = ['opt'];
      var isPicked = state.picked.indexOf(o.k) >= 0;
      var isAnswer = q.answer.indexOf(o.k) >= 0;
      if (state.revealed) {
        if (isAnswer) cls.push('ok');
        else if (isPicked) cls.push('bad');
      } else if (isPicked) {
        cls.push('sel');
      }
      return '' +
        '<li><button class="' + cls.join(' ') + '" data-opt="' + esc(o.k) + '"' +
          (state.revealed ? ' disabled' : '') + '>' +
          '<span class="k">' + esc(o.k) + '</span>' +
          '<span class="t">' + esc(o.t) + '</span>' +
        '</button></li>';
    }).join('');

    var pos = state.pos + 1;
    var tag = q.multi
      ? '<span class="tag multi">多选 · 选 ' + q.answer.length + ' 项</span>'
      : '<span class="tag">单选</span>';

    var submitRow = (q.multi && !state.revealed)
      ? '<div class="submit-row"><button class="btn primary" data-act="submit"' +
        (state.picked.length ? '' : ' disabled') + '>提交答案</button></div>'
      : '';

    var result = '';
    if (state.revealed) {
      var r = state.results[q.id];
      var ok = r ? r.ok : false;
      var ans = q.answer.join(', ');
      result = '' +
        '<div class="result ' + (ok ? 'ok' : 'bad') + '">' +
          '<span>' + (ok ? '<b>回答正确 ✓</b>' : '<b>回答错误 ✗</b>　正确答案：<b>' + esc(ans) + '</b>') + '</span>' +
          '<button class="link" data-act="retry">重做本题</button>' +
        '</div>';
    }

    var extra = '';
    if (state.revealed) {
      if (q.notes) {
        extra += '<div class="notes"><span class="label">解析 / 说明</span>' + linkify(q.notes) + '</div>';
      }
      if (q.ref && q.ref.length) {
        extra += '<div class="notes"><span class="label">参考链接</span><ul class="refs">' +
          q.ref.map(function (u) {
            return '<li><a href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(u) + '</a></li>';
          }).join('') + '</ul></div>';
      }
    }

    return '' +
      '<article class="card">' +
        '<div class="meta"><span>第 ' + pos + ' / ' + total + ' 题</span>' + tag + '</div>' +
        '<p class="qtext">' + esc(q.q) + '</p>' +
        '<ul class="opts">' + opts + '</ul>' +
        submitRow + result + extra +
      '</article>';
  }

  function renderPager(total) {
    return '' +
      '<nav class="pager">' +
        '<button class="btn" data-act="prev"' + (state.pos === 0 ? ' disabled' : '') + '>← 上一题</button>' +
        '<span class="hint"><kbd>A</kbd>-<kbd>H</kbd> 选择 · <kbd>Enter</kbd> 提交/下一题 · <kbd>←</kbd><kbd>→</kbd> 切换</span>' +
        '<button class="btn primary" data-act="next"' + (state.pos >= total - 1 ? ' disabled' : '') + '>下一题 →</button>' +
      '</nav>';
  }

  function render() {
    if (state.view === 'home') renderHome(); else renderQuiz();
  }

  /* ---------- 事件 ---------- */

  app.addEventListener('click', function (e) {
    var t = e.target.closest('[data-bank],[data-filter],[data-act],[data-opt]');
    if (!t) return;
    if (t.hasAttribute('data-bank')) return openBank(t.getAttribute('data-bank'));
    if (t.hasAttribute('data-filter')) return setFilter(t.getAttribute('data-filter'));
    if (t.hasAttribute('data-opt')) return pick(t.getAttribute('data-opt'));
    var act = t.getAttribute('data-act');
    if (act === 'home') goHome();
    else if (act === 'prev') go(-1);
    else if (act === 'next') go(1);
    else if (act === 'submit') submit();
    else if (act === 'retry') retry();
    else if (act === 'reset') resetProgress();
    else if (act === 'jump') jumpTo(document.getElementById('jumpInput').value);
  });

  app.addEventListener('change', function (e) {
    if (e.target.getAttribute('data-act') === 'shuffle') toggleShuffle();
  });

  app.addEventListener('keydown', function (e) {
    if (e.target.id === 'jumpInput' && e.key === 'Enter') jumpTo(e.target.value);
  });

  document.addEventListener('keydown', function (e) {
    if (state.view !== 'quiz') return;
    if (e.target && (e.target.tagName === 'INPUT' || e.altKey || e.ctrlKey || e.metaKey)) return;
    var key = e.key;
    if (key === 'ArrowLeft') { go(-1); return; }
    if (key === 'ArrowRight') { go(1); return; }
    if (key === 'Enter') {
      var q = currentQuestion();
      if (!q) return;
      if (state.revealed) go(1); else submit();
      return;
    }
    if (/^[a-hA-H]$/.test(key)) {
      var letter = key.toUpperCase();
      var q2 = currentQuestion();
      if (q2 && q2.options.some(function (o) { return o.k === letter; })) pick(letter);
    }
  });

  render();
})();
