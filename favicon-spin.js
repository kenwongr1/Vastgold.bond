(function () {
  var canvas = document.createElement('canvas');
  canvas.width  = 64;
  canvas.height = 64;
  var ctx   = canvas.getContext('2d');
  var img   = new Image();
  var angle = 0;
  var raf;

  // Force-set the favicon link to our canvas
  function getFavLink() {
    var el = document.getElementById('vastgold-favicon');
    if (!el) {
      // Remove ALL existing favicons first
      document.querySelectorAll('link[rel*="icon"]').forEach(function(l){ l.remove(); });
      el = document.createElement('link');
      el.id   = 'vastgold-favicon';
      el.rel  = 'icon';
      el.type = 'image/png';
      document.head.appendChild(el);
    }
    return el;
  }

  function draw() {
    ctx.clearRect(0, 0, 64, 64);

    var scaleX = Math.cos(angle);   // -1 → 0 → 1  (Y-axis rotation)
    var absScale = Math.abs(scaleX);

    ctx.save();
    ctx.translate(32, 32);
    ctx.transform(scaleX, 0, 0, 1, 0, 0);  // horizontal squish

    // Slight lighting: darken on back-face
    ctx.globalAlpha = 0.4 + 0.6 * absScale;
    ctx.drawImage(img, -32, -32, 64, 64);
    ctx.restore();
    ctx.globalAlpha = 1;

    getFavLink().href = canvas.toDataURL('image/png');

    angle += 0.04;                  // ~6-second full rotation
    raf = requestAnimationFrame(draw);
  }

  img.onload = function () {
    cancelAnimationFrame(raf);
    draw();
  };

  img.src = 'Vastgold Logo.png';
})();
