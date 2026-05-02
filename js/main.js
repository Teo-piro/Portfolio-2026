// ── Shared helpers ───────────────────────────────────────────────

function createProjectCard(project) {
  var lang = window.currentLang || 'it';
  var descText = project.projectDesc[lang];
  var shortDesc = descText.length > 130 ? descText.substring(0, 130).trim() + '…' : descText;
  var ctaLabel = lang === 'it' ? 'Scopri il progetto →' : 'See project →';
  return (
    '<article class="card fade-in">' +
      '<a href="project.html?id=' + project.id + '" class="card__link">' +
        '<div class="card__image">' +
          (project.thumb
            ? '<img src="' + project.thumb + '" alt="' + project.title[lang] + '" loading="lazy" style="object-fit:' + (project.thumbFit || 'contain') + '">'
            : '<div class="card__image-inner"><span class="card__play">&#9654;</span></div>') +
        '</div>' +
        '<div class="card__content">' +
          '<span class="card__category overline">' + project.category[lang] + ' · ' + project.year + '</span>' +
          '<h3 class="card__title">' + project.title[lang] + '</h3>' +
          '<p class="card__desc">' + shortDesc + '</p>' +
          '<span class="card__cta-text">' + ctaLabel + '</span>' +
        '</div>' +
      '</a>' +
    '</article>'
  );
}

// ── Nav behaviour ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('nav');
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');

  // Sticky blur on scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }, { passive: true });

  // Mobile hamburger
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('nav__links--open');
      hamburger.classList.toggle('nav__hamburger--open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('nav__links--open');
        hamburger.classList.remove('nav__hamburger--open');
      });
    });
  }

  // Active nav link
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  // Scroll fade-in via IntersectionObserver
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
});

// Re-observe new fade-in elements (called after dynamic render)
function observeFadeIn() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in:not(.visible)').forEach(function (el) {
    observer.observe(el);
  });
}

// ── Home: featured grid ──────────────────────────────────────────
window.renderFeatured = function () {
  var grid = document.getElementById('featuredGrid');
  if (!grid) return;
  var ids = ['fuori-brief', 'flatmates-social', 'generali-semplice-come'];
  var featured = ids.map(function (id) {
    return projects.find(function (p) { return p.id === id; });
  }).filter(Boolean);
  grid.innerHTML = featured.map(createProjectCard).join('');
  observeFadeIn();
};

// ── Projects page ────────────────────────────────────────────────
var activeFilter = 'all';

window.renderAllProjects = function () {
  var grid = document.getElementById('projectsGrid');
  if (!grid) return;
  var lang = window.currentLang || 'it';
  // Always compare against Italian key so filter stays stable on lang switch
  var filtered = activeFilter === 'all'
    ? projects
    : projects.filter(function (p) { return p.category['it'].toLowerCase() === activeFilter; });
  grid.innerHTML = filtered.length
    ? filtered.map(createProjectCard).join('')
    : '<p class="no-results" data-it="Nessun progetto trovato." data-en="No projects found.">Nessun progetto trovato.</p>';
  observeFadeIn();
};

document.addEventListener('DOMContentLoaded', function () {
  // Filter pills
  document.querySelectorAll('.filter-pill').forEach(function (pill) {
    pill.addEventListener('click', function () {
      document.querySelectorAll('.filter-pill').forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
      activeFilter = pill.dataset.filter;
      renderAllProjects();
    });
  });
  if (document.getElementById('projectsGrid')) renderAllProjects();
  if (document.getElementById('featuredGrid')) renderFeatured();
});

// ── Project detail page ──────────────────────────────────────────
window.renderProjectDetail = function () {
  var container = document.getElementById('projectDetail');
  if (!container) return;
  var params = new URLSearchParams(location.search);
  var id = params.get('id');
  var project = projects.find(function (p) { return p.id === id; });
  var lang = window.currentLang || 'it';

  if (!project) {
    container.innerHTML = '<p class="detail-error">Progetto non trovato.</p>';
    return;
  }

  document.title = 'piro. — ' + project.title[lang];

  var backLabel = lang === 'it' ? '← Tutti i progetti' : '← All projects';
  var clientLabel = lang === 'it' ? 'Cliente' : 'Client';
  var projectLabel = lang === 'it' ? 'Il Progetto' : 'The Project';
  var whatLabel = lang === 'it' ? 'Cosa ho fatto' : 'What I Did';

  // Build the media block
  var mediaHtml;
  if (project.dualBanner) {
    var db = project.dualBanner;
    var liLabel  = lang === 'it' ? 'Guarda su LinkedIn' : 'Watch on LinkedIn';
    var liCta    = lang === 'it' ? 'Visita il profilo' : 'Visit profile';
    var igLabel  = lang === 'it' ? 'Guarda su Instagram' : 'Watch on Instagram';
    var igCta    = lang === 'it' ? 'Visita il profilo' : 'Visit profile';
    mediaHtml =
      '<div class="detail__dual-banner">' +

        // LinkedIn
        '<a href="' + db.linkedin.url + '" class="detail__banner detail__banner--li" target="_blank" rel="noopener" aria-label="' + liLabel + '">' +
          '<div class="detail__banner-inner">' +
            '<svg class="detail__banner-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
              '<rect x="2" y="2" width="20" height="20" rx="3" fill="white" fill-opacity="0.15"/>' +
              '<path d="M7 10v7M7 7v.5M12 17v-4c0-1.1.9-2 2-2s2 .9 2 2v4M12 10v7" stroke="white" stroke-width="1.5" stroke-linecap="round"/>' +
            '</svg>' +
            '<p class="detail__banner-platform">LinkedIn</p>' +
            '<p class="detail__banner-handle">' + db.linkedin.handle + '</p>' +
            '<span class="detail__banner-cta">' + liCta + ' →</span>' +
          '</div>' +
        '</a>' +

        // Instagram
        '<a href="' + db.instagram.url + '" class="detail__banner detail__banner--ig" target="_blank" rel="noopener" aria-label="' + igLabel + '">' +
          '<div class="detail__banner-inner">' +
            '<svg class="detail__banner-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
              '<rect x="2" y="2" width="20" height="20" rx="5" stroke="white" stroke-width="1.5"/>' +
              '<circle cx="12" cy="12" r="4.5" stroke="white" stroke-width="1.5"/>' +
              '<circle cx="17.5" cy="6.5" r="1" fill="white"/>' +
            '</svg>' +
            '<p class="detail__banner-platform">Instagram</p>' +
            '<p class="detail__banner-handle">' + db.instagram.handle + '</p>' +
            '<span class="detail__banner-cta">' + igCta + ' →</span>' +
          '</div>' +
        '</a>' +

      '</div>';
  } else if (project.videoEmbed) {
    mediaHtml =
      '<div class="detail__embed-wrap">' +
        '<iframe ' +
          'src="https://www.youtube.com/embed/' + project.videoEmbed + '?rel=0" ' +
          'title="' + project.title[lang] + '" ' +
          'frameborder="0" ' +
          'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
          'allowfullscreen ' +
          'loading="lazy">' +
        '</iframe>' +
      '</div>';
  } else if (project.instagramUrl) {
    var igLabel = lang === 'it' ? 'Guarda i Reel su Instagram' : 'Watch Reels on Instagram';
    var igProfile = lang === 'it' ? 'Visita il profilo' : 'Visit profile';
    mediaHtml =
      '<a href="' + project.instagramUrl + '" class="detail__ig-preview" target="_blank" rel="noopener" aria-label="' + igLabel + '">' +
        '<div class="detail__ig-inner">' +
          '<svg class="detail__ig-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
            '<rect x="2" y="2" width="20" height="20" rx="5" stroke="white" stroke-width="1.5"/>' +
            '<circle cx="12" cy="12" r="4.5" stroke="white" stroke-width="1.5"/>' +
            '<circle cx="17.5" cy="6.5" r="1" fill="white"/>' +
          '</svg>' +
          '<p class="detail__ig-handle">' + (project.instagramHandle || '@flatmatesagency') + '</p>' +
          '<span class="detail__ig-cta">' + igProfile + ' →</span>' +
        '</div>' +
      '</a>';
  } else {
    mediaHtml =
      '<div class="detail__video-placeholder">' +
        '<span class="card__play card__play--lg">&#9654;</span>' +
        '<span class="detail__video-label">SHOWREEL</span>' +
      '</div>';
  }

  container.innerHTML =
    '<div class="detail__hero">' +
      '<div class="detail__video-wrap">' +
        mediaHtml +
      '</div>' +
    '</div>' +
    '<div class="detail__body container">' +
      '<a href="projects.html" class="detail__back">' + backLabel + '</a>' +
      '<div class="detail__meta">' +
        '<span class="overline detail__cat">' + project.category[lang] + ' · ' + project.year + '</span>' +
        '<h1 class="detail__title">' + project.title[lang] + '</h1>' +
        '<p class="detail__client-name"><strong>' + clientLabel + ':</strong> ' + project.client + '</p>' +
      '</div>' +
      '<div class="detail__grid">' +
        '<div class="detail__section fade-in">' +
          '<h2 class="detail__section-title">' + projectLabel + '</h2>' +
          '<p class="detail__text">' + project.projectDesc[lang] + '</p>' +
        '</div>' +
        '<div class="detail__section fade-in">' +
          '<h2 class="detail__section-title">' + clientLabel + '</h2>' +
          '<p class="detail__text">' + project.clientDesc[lang] + '</p>' +
        '</div>' +
        '<div class="detail__section detail__section--full fade-in">' +
          '<h2 class="detail__section-title">' + whatLabel + '<span class="copper-dot">.</span></h2>' +
          '<p class="detail__text detail__text--featured">' + project.whatIDid[lang] + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';

  observeFadeIn();
};

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('projectDetail')) renderProjectDetail();
});
