(function () {
  function setFavicon() {
    // Remove any competing favicon links injected by WordPress/theme
    document.querySelectorAll('link[rel*="icon"]').forEach(function (l) {
      if (l.id !== 'vastgold-favicon') l.remove();
    });

    var el = document.getElementById('vastgold-favicon');
    if (!el) {
      el = document.createElement('link');
      el.id  = 'vastgold-favicon';
      el.rel = 'icon';
      el.type = 'image/png';
      document.head.appendChild(el);
    }
    el.href = 'Vastgold Logo.png';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setFavicon);
  } else {
    setFavicon();
  }
})();
