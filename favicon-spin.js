(function () {
  var canvas = document.createElement('canvas');
  canvas.width  = 64;
  canvas.height = 64;
  var ctx = canvas.getContext('2d');
  var img = new Image();

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

  img.onload = function () {
    ctx.drawImage(img, 0, 0, 64, 64);
    getFavLink().href = canvas.toDataURL('image/png');
  };

  img.src = 'Vastgold Logo.png';
})();
