/* Общий каркас: символы, фон, гирлянда, конфетти, полноэкранный режим. */
var $ = function (id) { return document.getElementById(id); };
document.body.insertAdjacentHTML("afterbegin", `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <symbol id="sparkle" viewBox="-10 -10 20 20"><path fill="currentColor" d="M0 -10C1 -3 3 -1 10 0C3 1 1 3 0 10C-1 3 -3 1 -10 0C-3 -1 -1 -3 0 -10Z"/></symbol>
    <symbol id="crown" viewBox="0 0 100 70">
      <path d="M8 60 L4 16 L29 36 L50 6 L71 36 L96 16 L92 60Z" fill="#f2b33d" stroke="#c98b14" stroke-width="4" stroke-linejoin="round"/>
      <rect x="8" y="52" width="84" height="10" rx="3" fill="#d9921a"/>
      <circle cx="4" cy="14" r="5" fill="#fff2c4" stroke="#c98b14" stroke-width="2"/>
      <circle cx="50" cy="5" r="5.5" fill="#fff2c4" stroke="#c98b14" stroke-width="2"/>
      <circle cx="96" cy="14" r="5" fill="#fff2c4" stroke="#c98b14" stroke-width="2"/>
      <circle cx="30" cy="57" r="3" fill="#fff2c4"/><circle cx="50" cy="57" r="3" fill="#fff2c4"/><circle cx="70" cy="57" r="3" fill="#fff2c4"/>
    </symbol>
    <symbol id="owl" viewBox="0 0 120 124">
      <path d="M32 44 L26 18 L50 33Z M88 44 L94 18 L70 33Z" fill="#fff" stroke="#1f2a5a" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M27 66 C8 70 6 98 26 104 C36 96 36 78 27 66Z M93 66 C112 70 114 98 94 104 C84 96 84 78 93 66Z" fill="#fff" stroke="#1f2a5a" stroke-width="3.5" stroke-linejoin="round"/>
      <ellipse cx="60" cy="72" rx="35" ry="40" fill="#fff" stroke="#1f2a5a" stroke-width="3.5"/>
      <circle cx="46" cy="54" r="14" fill="#fff" stroke="#1f2a5a" stroke-width="3"/><circle cx="74" cy="54" r="14" fill="#fff" stroke="#1f2a5a" stroke-width="3"/>
      <circle cx="46" cy="54" r="9" fill="#f2b33d"/><circle cx="74" cy="54" r="9" fill="#f2b33d"/>
      <circle cx="46" cy="54" r="4.6" fill="#1f2a5a"/><circle cx="74" cy="54" r="4.6" fill="#1f2a5a"/>
      <circle cx="48" cy="51.5" r="1.7" fill="#fff"/><circle cx="76" cy="51.5" r="1.7" fill="#fff"/>
      <path d="M60 62 L53.5 71 L60 79 L66.5 71Z" fill="#f2b33d" stroke="#1f2a5a" stroke-width="2.5" stroke-linejoin="round"/>
      <g fill="#1f2a5a" opacity=".45"><circle cx="50" cy="94" r="2"/><circle cx="60" cy="100" r="2"/><circle cx="70" cy="94" r="2"/><circle cx="60" cy="88" r="2"/><circle cx="42" cy="84" r="1.6"/><circle cx="78" cy="84" r="1.6"/></g>
      <path d="M48 110 L48 118 M44 118 L52 118 M72 110 L72 118 M68 118 L76 118" stroke="#d9921a" stroke-width="3" stroke-linecap="round" fill="none"/>
    </symbol>
    <symbol id="books" viewBox="0 0 170 96">
      <g stroke="#1f2a5a" stroke-width="3" stroke-linejoin="round">
        <rect x="6" y="58" width="150" height="32" rx="6" fill="#6b8e3e"/>
        <rect x="140" y="62" width="14" height="24" rx="2" fill="#fffaf0" stroke-width="2"/>
        <rect x="26" y="58" width="6" height="32" fill="#f2b33d" stroke="none"/><rect x="40" y="58" width="3" height="32" fill="#f2b33d" stroke="none"/>
        <rect x="22" y="28" width="132" height="30" rx="6" fill="#8a5a33"/>
        <rect x="136" y="32" width="14" height="22" rx="2" fill="#fffaf0" stroke-width="2"/>
        <rect x="40" y="28" width="6" height="30" fill="#f2b33d" stroke="none"/>
        <rect x="34" y="4" width="112" height="26" rx="6" fill="#4f6b2b"/>
        <rect x="128" y="8" width="14" height="18" rx="2" fill="#fffaf0" stroke-width="2"/>
        <rect x="56" y="4" width="6" height="26" fill="#f2b33d" stroke="none"/>
      </g>
    </symbol>
    <symbol id="castle" viewBox="0 0 300 200">
      <g fill="#6f8a63">
        <rect x="112" y="72" width="76" height="128"/><polygon points="106,72 150,8 194,72"/>
        <rect x="52" y="104" width="40" height="96"/><polygon points="46,104 72,44 98,104"/>
        <rect x="208" y="112" width="40" height="88"/><polygon points="202,112 228,56 254,112"/>
        <rect x="92" y="150" width="20" height="50"/><rect x="188" y="150" width="20" height="50"/>
      </g>
      <g fill="#f2b33d"><rect x="142" y="96" width="16" height="26" rx="8"/><rect x="64" y="128" width="16" height="22" rx="8"/><rect x="220" y="136" width="16" height="22" rx="8"/></g>
    </symbol>
  </defs>
</svg>
<div class="bg" id="bg">
  <div class="cloud c1"></div><div class="cloud c2"></div>
  <svg class="castle"><use href="#castle"/></svg>
  <svg class="hills" viewBox="0 0 1600 120" preserveAspectRatio="none">
    <path d="M0 70 C200 20 400 30 600 66 C800 100 1000 40 1200 54 C1400 68 1500 40 1600 50 L1600 120 L0 120Z" fill="#b7cfa0" opacity=".55"/>
    <path d="M0 96 C260 60 520 86 800 92 C1080 98 1340 62 1600 84 L1600 120 L0 120Z" fill="#8fae78" opacity=".6"/>
  </svg>
</div>
<svg id="bunting" viewBox="0 0 1600 120" preserveAspectRatio="none" aria-hidden="true"></svg>
<button class="fs" id="fs" type="button" aria-label="Полный экран" title="Полный экран (F)">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>
</button>
<canvas id="fx"></canvas>
`);
/* ===================== конфетти ===================== */
var cv = $("fx"), ctx = cv.getContext("2d"), parts = [], raf = 0, dpr = 1;
function sizeFx() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
sizeFx(); addEventListener("resize", sizeFx);
var COLORS = ["#f2b33d", "#ffd16b", "#6b8e3e", "#fffaf0", "#8fc4ec", "#8a5a33"];
function mk(x, y, vx, vy, big) {
  return { x: x, y: y, vx: vx, vy: vy, r: (big ? 7 : 5) + Math.random() * 8, rot: Math.random() * 6, vr: (Math.random() - .5) * .3,
    c: COLORS[Math.floor(Math.random() * COLORS.length)], t: Math.floor(Math.random() * 3), life: 1, g: .22 + Math.random() * .08 };
}
function burst(x, y, n) {
  for (var i = 0; i < n; i++) {
    var a = Math.random() * Math.PI * 2, s = 4 + Math.random() * 9;
    parts.push(mk(x, y, Math.cos(a) * s, Math.sin(a) * s - 4, false));
  }
  kick();
}
function rain(n) {
  for (var i = 0; i < n; i++) {
    var p = mk(Math.random() * innerWidth, -20 - Math.random() * innerHeight * .8, (Math.random() - .5) * 2, 2 + Math.random() * 3, true);
    p.g = .03; parts.push(p);
  }
  kick();
}
function kick() { if (!raf) raf = requestAnimationFrame(tick); }
function star(r) {
  ctx.beginPath();
  for (var i = 0; i < 10; i++) { var rr = i % 2 ? r * .45 : r, a = i * Math.PI / 5 - Math.PI / 2; ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); }
  ctx.closePath();
}
function tick() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  parts = parts.filter(function (p) { return p.y < innerHeight + 40 && p.life > 0; });
  parts.forEach(function (p) {
    p.vy += p.g; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
    if (p.y > innerHeight * .75) p.life -= .03;
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.globalAlpha = Math.max(p.life, 0); ctx.fillStyle = p.c;
    if (p.t === 0) star(p.r); else if (p.t === 1) { ctx.beginPath(); ctx.arc(0, 0, p.r * .45, 0, 6.3); } else { ctx.beginPath(); ctx.rect(-p.r * .4, -p.r * .22, p.r * .8, p.r * .44); }
    ctx.fill(); ctx.restore();
  });
  raf = parts.length ? requestAnimationFrame(tick) : 0;
  if (!raf) ctx.clearRect(0, 0, innerWidth, innerHeight);
}

/* ===================== декор ===================== */
(function decor() {
  var svg = $("bunting"), NS = "http://www.w3.org/2000/svg", cols = ["#f2b33d", "#6b8e3e", "#fffaf0", "#2a2a33", "#a9703f"];
  var h = "";
  function swag(x0, x1, sag, off) {
    var p = "M" + x0 + " 4 Q" + ((x0 + x1) / 2) + " " + (4 + sag * 2) + " " + x1 + " 4";
    h += '<path d="' + p + '" fill="none" stroke="#1f2a5a" stroke-width="2" opacity=".55"/>';
    var n = 14;
    for (var i = 0; i < n; i++) {
      var t = (i + .5) / n, x = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * ((x0 + x1) / 2) + t * t * x1;
      var y = (1 - t) * (1 - t) * 4 + 2 * (1 - t) * t * (4 + sag * 2) + t * t * 4;
      var dx = 2 * (1 - t) * (((x0 + x1) / 2) - x0) + 2 * t * (x1 - ((x0 + x1) / 2)), dy = 2 * (1 - t) * (4 + sag * 2 - 4) + 2 * t * (4 - (4 + sag * 2));
      var ang = Math.atan2(dy, dx) * 180 / Math.PI;
      h += '<g transform="translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + ang.toFixed(1) + ')"><polygon points="-26,0 26,0 0,58" fill="' + cols[(i + off) % cols.length] + '" stroke="#1f2a5a" stroke-width="1.5" stroke-linejoin="round" opacity=".92"/></g>';
    }
  }
  swag(-20, 820, 26, 0); swag(780, 1620, 26, 2);
  svg.innerHTML = h;

  var bg = $("bg");
  for (var i = 0; i < 26; i++) {
    var s = document.createElementNS(NS, "svg"), size = 1.4 + Math.random() * 2.6;
    s.setAttribute("class", "spark");
    s.style.cssText = "left:" + (Math.random() * 98).toFixed(1) + "%;top:" + (8 + Math.random() * 84).toFixed(1) + "%;width:" + size + "vmin;height:" + size + "vmin;animation-delay:" + (Math.random() * 3.4).toFixed(2) + "s";
    s.innerHTML = '<use href="#sparkle"/>';
    bg.appendChild(s);
  }
})();
function toggleFs() {
  var d = document;
  if (d.fullscreenElement || d.webkitFullscreenElement) (d.exitFullscreen || d.webkitExitFullscreen).call(d);
  else { var e = d.documentElement; (e.requestFullscreen || e.webkitRequestFullscreen || function () {}).call(e); }
}
$("fs").addEventListener("click", toggleFs);
