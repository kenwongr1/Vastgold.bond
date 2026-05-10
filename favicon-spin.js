(function () {
  var LOGO = 'Vastgold Logo.png';
  var SIZE = 64;

  var canvas = document.createElement('canvas');
  canvas.width  = SIZE;
  canvas.height = SIZE;
  var ctx    = canvas.getContext('2d');
  var angle  = 0;

  function getFavLink() {
    var el = document.getElementById('vastgold-favicon');
    if (!el) {
      document.querySelectorAll('link[rel*="icon"]').forEach(function (l) { l.remove(); });
      el = document.createElement('link');
      el.id   = 'vastgold-favicon';
      el.rel  = 'icon';
      el.type = 'image/png';
      document.head.appendChild(el);
    }
    return el;
  }

  function draw(img) {
    ctx.clearRect(0, 0, SIZE, SIZE);

    // Y-axis 3-D coin-flip effect
    var scaleX   = Math.cos(angle);
    var absScale = Math.abs(scaleX);

    ctx.save();
    ctx.translate(SIZE / 2, SIZE / 2);
    ctx.transform(scaleX, 0, 0, 1, 0, 0);   // horizontal squish
    ctx.globalAlpha = 0.35 + 0.65 * absScale; // darken back-face
    ctx.drawImage(img, -SIZE / 2, -SIZE / 2, SIZE, SIZE);
    ctx.restore();
    ctx.globalAlpha = 1;

    getFavLink().href = canvas.toDataURL('image/png');
    angle += 0.04;                             // ~6-second full rotation
    requestAnimationFrame(function () { draw(img); });
  }

  // Kill any icon link WordPress/Elementor tries to inject after us
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      m.addedNodes.forEach(function (node) {
        if (node.nodeType === 1 &&
            node.tagName  === 'LINK' &&
            node.rel && node.rel.indexOf('icon') !== -1 &&
            node.id !== 'vastgold-favicon') {
          node.remove();
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    observer.observe(document.head, { childList: true });

    var img = new Image();
    img.onload  = function () { draw(img); };
    img.onerror = function () { getFavLink().href = LOGO; }; // static fallback
    img.src = LOGO;
  });
})();
