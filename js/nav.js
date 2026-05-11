(function () {
  'use strict';

  const FIGURES = [
    { name: 'Aphrodite',     file: 'aphrodite.html' },
    { name: 'Apollo-Helios', file: 'apollo-helios.html' },
    { name: 'Chiron',        file: 'chiron.html' },
    { name: 'Dionysus',      file: 'dionysus.html' },
    { name: 'Fisher King',   file: 'fisher-king.html' },
    { name: 'Hecate',        file: 'hecate.html' },
    { name: 'Hephaestus',    file: 'hephaestus.html' },
    { name: 'Hermes-Thoth',  file: 'hermes-thoth.html' },
    { name: 'Isis-Sophia',   file: 'isis-sophia.html' },
    { name: 'Job',           file: 'job.html' },
    { name: 'Loki',          file: 'loki.html' },
    { name: 'Oaken Pilgrim', file: 'oaken-pilgrim.html' },
    { name: 'Orpheus',       file: 'orpheus.html' },
    { name: 'Prometheus',    file: 'prometheus.html' },
    { name: 'Zeus-Ammon',    file: 'zeus-ammon.html' },
  ];

  const path   = window.location.pathname;
  const inFigs = path.includes('/figures/');
  const root   = inFigs ? '../' : '';

  const isHome          = /index\.html$/.test(path) || /\/$/.test(path) || path === '';
  const isMethodology   = path.includes('methodology');
  const isTheory        = path.includes('theory');
  const isConstellation = path.includes('constellation');
  const isFigure        = inFigs;

  function active(cond) {
    return cond ? ' class="is-active" aria-current="page"' : '';
  }

  const ICON_SVG = `<img class="nav__icon" src="${root}assets/images/icon.png" alt="" aria-hidden="true">`;

  const CHEVRON_SVG = `<svg class="nav__chevron" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 8" aria-hidden="true" focusable="false">
    <polyline points="1,1 6,7 11,1" fill="none" stroke="currentColor"
      stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const figureItems = FIGURES.map(function (f) {
    const href      = root + 'figures/' + f.file;
    const isCurrent = path.includes(f.file);
    return '<li><a href="' + href + '"' + (isCurrent ? ' aria-current="page"' : '') + '>'
      + f.name + '</a></li>';
  }).join('\n            ');

  const navHTML = `<nav class="nav container" aria-label="Site navigation">

    <a class="nav__brand" href="${root}index.html" aria-label="Mythopoetic Theogony — home">
      ${ICON_SVG}
      <span class="nav__logo display-heading">Mythopoetic Theogony</span>
    </a>

    <button class="nav__toggle" aria-label="Open navigation menu"
        aria-expanded="false" aria-controls="nav-menu">
      <span class="nav__toggle-bar"></span>
      <span class="nav__toggle-bar"></span>
      <span class="nav__toggle-bar"></span>
    </button>

    <ul class="nav__menu" id="nav-menu" role="list">
      <li><a href="${root}index.html"${active(isHome)}>Home</a></li>
      <li><a href="${root}methodology.html"${active(isMethodology)}>Methodology</a></li>
      <li><a href="${root}theory.html"${active(isTheory)}>Theory</a></li>
      <li class="nav__item--dropdown">
        <button class="nav__dropdown-toggle${isFigure ? ' is-active' : ''}"
            aria-expanded="false" aria-haspopup="true"
            aria-controls="figures-dropdown">
          The Figures ${CHEVRON_SVG}
        </button>
        <ul class="nav__dropdown" id="figures-dropdown" role="list">
          ${figureItems}
        </ul>
      </li>
      <li><a href="${root}constellation.html"${active(isConstellation)}>Constellation</a></li>
    </ul>

  </nav>`;

  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.site-header');
    if (!header) return;

    header.innerHTML = navHTML;

    const toggle      = header.querySelector('.nav__toggle');
    const menu        = header.querySelector('.nav__menu');
    const dropBtn     = header.querySelector('.nav__dropdown-toggle');
    const dropdown    = header.querySelector('.nav__dropdown');
    const dropItem    = header.querySelector('.nav__item--dropdown');

    /* ── Hamburger ─────────────────────────────────────────── */
    toggle.addEventListener('click', function () {
      const open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      if (!open) closeDropdown();
    });

    /* ── Figures dropdown: click / keyboard ─────────────────── */
    dropBtn.addEventListener('click', toggleDropdown);

    function openDropdown() {
      dropdown.classList.add('is-open');
      dropBtn.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
      dropdown.classList.remove('is-open');
      dropBtn.setAttribute('aria-expanded', 'false');
    }

    function toggleDropdown() {
      dropdown.classList.contains('is-open') ? closeDropdown() : openDropdown();
    }

    /* ── Desktop hover ──────────────────────────────────────── */
    var closeTimer;
    dropItem.addEventListener('mouseenter', function () {
      if (window.innerWidth > 768) { clearTimeout(closeTimer); openDropdown(); }
    });
    dropItem.addEventListener('mouseleave', function () {
      if (window.innerWidth > 768) { closeTimer = setTimeout(closeDropdown, 120); }
    });

    /* ── Close on outside click ────────────────────────────── */
    document.addEventListener('click', function (e) {
      if (!header.contains(e.target)) {
        closeDropdown();
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    /* ── Keyboard: Escape closes everything ─────────────────── */
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (dropdown.classList.contains('is-open')) {
        closeDropdown();
        dropBtn.focus();
      } else if (menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    /* ── Close mobile menu when a non-dropdown link is clicked ─ */
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  });
})();
