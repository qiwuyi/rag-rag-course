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
    { id: 'home', file: 'index.html', tag: '⌂', ref: false, title: '课程主页', count: false },
    { id: '0001', file: 'lessons/0001-rag-pipeline-overview.html', tag: '①', ref: false, title: '全流程概览', count: true },
    { id: '0002', file: 'lessons/0002-ingestion-pipeline.html', tag: '②', ref: false, title: '摄入流水线', count: true },
    { id: '0003', file: 'lessons/0003-retrieval-generation.html', tag: '③', ref: false, title: '查询流水线', count: true },
    { id: 'ref', file: 'reference/001-rag-glossary.html', tag: 'R', ref: true, title: '速查表', count: false }
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
    '<div class="brand">📚 RAG 原理课程</div>' +
    '<div class="sub">案例 · rag-chatbot-fork</div>' +
    '<div class="progress-bar"><div class="fill" style="width:' + pct + '%"></div></div>' +
    '<div class="progress-label">阶段进度 ' + done + '/' + lessons.length + '</div>' +
    ITEMS.map(function (i) {
      var isCurrent = i.file.split('/').pop() === current;
      var cls = 'item' + (isCurrent ? ' active' : '');
      var check = (i.count && visited[i.id]) ? '<span class="check">✓</span>' : '';
      return '<a class="' + cls + '" href="' + ROOT + i.file + '">' +
             '<span class="tag' + (i.ref ? ' ref' : '') + '">' + i.tag + '</span>' +
             '<span class="lbl">' + i.title + '</span>' + check + '</a>';
    }).join('');

  document.body.appendChild(nav);
  document.body.classList.add('has-sidebar');
})();
