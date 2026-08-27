/* Shared course sidebar: shows progress, current lesson, and completed marks.
   Auto-detects current page, marks it visited (localStorage), renders nav. */
(function () {
  'use strict';

  var ROOT = (function () {
    var p = location.pathname;
    if (p.endsWith('/index.html') || p.endsWith('/')) return '';
    return '../';
  })();

  var ITEMS = [
    { id: 'home', file: 'index.html', tag: '鈱?, ref: false, title: '璇剧▼涓婚〉', count: false },
    { id: '0001', file: 'lessons/0001-rag-pipeline-overview.html', tag: '鈶?, ref: false, title: '鍏ㄦ祦绋嬫瑙?, count: true },
    { id: '0002', file: 'lessons/0002-ingestion-pipeline.html', tag: '鈶?, ref: false, title: '鎽勫叆娴佹按绾?, count: true },
    { id: '0003', file: 'lessons/0003-retrieval-generation.html', tag: '鈶?, ref: false, title: '鏌ヨ娴佹按绾?, count: true },
    { id: 'ref', file: 'reference/001-rag-glossary.html', tag: 'R', ref: true, title: '閫熸煡琛?, count: false }
  ];

  var current = location.pathname.split('/').pop() || 'index.html';
  var KEY = 'rag-course-visited';

  function getVisited() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function setVisited(v) {
    try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {}
  }

  // Mark current lesson as visited (auto progress tracking)
  var visited = getVisited();
  var curItem = null;
  for (var i = 0; i < ITEMS.length; i++) {
    if (ITEMS[i].file.split('/').pop() === current) { curItem = ITEMS[i]; break; }
  }
  if (curItem && curItem.count) { visited[curItem.id] = true; setVisited(visited); }

  // Progress = visited lessons / total lessons (speed-ref page not counted)
  var lessons = ITEMS.filter(function (i) { return i.count; });
  var done = lessons.filter(function (i) { return visited[i.id]; }).length;
  var pct = Math.round(done / lessons.length * 100);

  // Build nav
  var nav = document.createElement('nav');
  nav.className = 'sidebar';
  nav.innerHTML =
    '<div class="brand">馃摎 RAG 鍘熺悊璇剧▼</div>' +
    '<div class="sub">妗堜緥 路 rag-chatbot-fork</div>' +
    '<div class="progress-bar"><div class="fill" style="width:' + pct + '%"></div></div>' +
    '<div class="progress-label">闃舵杩涘害 ' + done + '/' + lessons.length + '</div>' +
    ITEMS.map(function (i) {
      var isCurrent = i.file.split('/').pop() === current;
      var cls = 'item' + (isCurrent ? ' active' : '');
      var check = (i.count && visited[i.id]) ? '<span class="check">鉁?/span>' : '';
      return '<a class="' + cls + '" href="' + ROOT + i.file + '">' +
             '<span class="tag' + (i.ref ? ' ref' : '') + '">' + i.tag + '</span>' +
             '<span class="lbl">' + i.title + '</span>' + check + '</a>';
    }).join('');

  document.body.appendChild(nav);
  document.body.classList.add('has-sidebar');
})();
