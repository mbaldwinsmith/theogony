(function () {
  'use strict';

  // Bail immediately and show everything if user prefers reduced motion.
  // The CSS prefers-reduced-motion block handles keyframes; this ensures
  // elements that start at opacity:0 don't stay hidden.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  // ── Individual .reveal elements ──────────────────────────────────────
  // Trigger individually as each element crosses the threshold.
  // Unobserve after reveal so the observer doesn't keep firing.
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -48px 0px'  // trigger slightly before bottom edge
    }
  );

  // ── .reveal-stagger groups ───────────────────────────────────────────
  // Elements with .reveal-stagger are grouped by their immediate parent.
  // When the first sibling in the group enters the viewport all siblings
  // receive is-visible at the same moment — the CSS nth-child transition-delay
  // rules then handle the visual stagger automatically.
  const staggerGroups = new Map();

  document.querySelectorAll('.reveal-stagger').forEach(el => {
    const parent = el.parentElement;
    if (!staggerGroups.has(parent)) staggerGroups.set(parent, []);
    staggerGroups.get(parent).push(el);
  });

  const staggerObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const siblings = staggerGroups.get(entry.target.parentElement) || [];
        siblings.forEach(el => el.classList.add('is-visible'));
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -32px 0px'
    }
  );

  // Wire up observers once the DOM is ready.
  // This script is loaded at the end of <body> so the DOM is already parsed,
  // but DOMContentLoaded guards against edge cases.
  function init() {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Only observe the first sibling of each stagger group — triggering it
    // causes the observer callback to reveal all siblings in the group.
    staggerGroups.forEach(els => {
      if (els[0]) staggerObserver.observe(els[0]);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
