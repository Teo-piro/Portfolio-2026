// ── Language system ──────────────────────────────────────────────
// Usage: add data-it="..." data-en="..." to any element.
// The function reads those attributes and swaps innerHTML.

(function () {
  window.currentLang = localStorage.getItem('piro-lang') || 'it';

  window.setLang = function (lang) {
    window.currentLang = lang;
    localStorage.setItem('piro-lang', lang);
    applyLang(lang);
    updateLangToggle(lang);
    // Re-render dynamic content (cards) if present
    if (typeof renderFeatured === 'function') renderFeatured();
    if (typeof renderAllProjects === 'function') renderAllProjects();
    if (typeof renderProjectDetail === 'function') renderProjectDetail();
  };

  function applyLang(lang) {
    document.querySelectorAll('[data-it]').forEach(function (el) {
      var val = el.dataset[lang];
      if (val !== undefined) el.innerHTML = val;
    });
    document.documentElement.lang = lang;
  }

  function updateLangToggle(lang) {
    var label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'it' ? 'EN' : 'IT';
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(window.currentLang);
    updateLangToggle(window.currentLang);

    var toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        setLang(window.currentLang === 'it' ? 'en' : 'it');
      });
    }
  });
})();
