// Load only the appropriate hero rendition, and only while motion is allowed.
(() => {
  const video = document.querySelector('[data-responsive-hero]');
  if (!video) return;
  const mobile = matchMedia('(max-width: 800px), (max-width: 1023px) and (max-height: 500px)');
  const portrait = matchMedia('(max-width: 600px) and (orientation: portrait)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const connection = navigator.connection;
  let visible = false;
  let source = '';
  const hero = video.closest('.editorial-hero');
  const copy = hero.querySelector('.editorial-copy');
  // The final address belongs above the headline, in the hero's free space.
  const positionBrandEnding = () => {
    const ending = Number.isFinite(video.duration) && video.currentTime >= video.duration - 3.7;
    hero.classList.toggle('hero-brand-ending', ending);
    if (!ending || !video.videoWidth) return;
    const box = hero.getBoundingClientRect();
    const copyTop = copy.getBoundingClientRect().top - box.top;
    const header = document.querySelector('.site-header').getBoundingClientRect();
    const safeTop = header.height + 36;
    const target = safeTop + Math.max(0, copyTop - 36 - safeTop) / 2;
    const scale = Math.max(box.width / video.videoWidth, box.height / video.videoHeight) * 1.06;
    const renderedHeight = video.videoHeight * scale;
    // Portrait rendition contains the complete landscape frame at y=250..656.
    const center = video.videoHeight > video.videoWidth ? 453 / 1280 : .5;
    const currentCenter = (box.height - renderedHeight) / 2 + renderedHeight * center;
    hero.style.setProperty('--brand-ending-offset', `${Math.min(0, target - currentCenter)}px`);
    const addressHalfHeight = (video.videoHeight > video.videoWidth ? 406 * scale : renderedHeight) * .1;
    hero.style.setProperty('--brand-clear-from', `${target - addressHalfHeight - 18}px`);
    hero.style.setProperty('--brand-clear-to', `${target + addressHalfHeight + 18}px`);
    hero.style.setProperty('--brand-fade-end', `${copyTop - 16}px`);
  };
  ['timeupdate', 'loadedmetadata', 'seeked', 'emptied'].forEach(event => video.addEventListener(event, positionBrandEnding));
  new ResizeObserver(positionBrandEnding).observe(copy);
  addEventListener('resize', positionBrandEnding);
  const sync = () => {
    const compact = mobile.matches;
    const poster = portrait.matches ? video.dataset.portraitPoster : compact ? video.dataset.mobilePoster : video.dataset.desktopPoster;
    if (video.getAttribute('poster') !== poster) video.poster = poster;
    const paused = !visible || document.hidden || reduced.matches || connection?.saveData || document.body.classList.contains('effects-paused') || document.body.classList.contains('universe-menu-open');
    if (paused) { video.pause(); return; }
    const next = portrait.matches ? video.dataset.portraitSrc : compact ? video.dataset.mobileSrc : video.dataset.desktopSrc;
    if (source !== next) {
      source = next;
      video.src = next;
      video.load();
    }
    video.muted = true;
    video.play().catch(() => {});
  };
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: .05 }).observe(video);
  mobile.addEventListener('change', sync);
  portrait.addEventListener('change', sync);
  reduced.addEventListener('change', sync);
  connection?.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  document.addEventListener('site-effects-change', sync);
  new MutationObserver(sync).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  sync();
})();

(() => {
  if (!('IntersectionObserver' in window)) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches) return;
  const reveal = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-revealed');
      reveal.unobserve(entry.target);
    }
  }, { threshold: .06 });
  document.querySelectorAll('.metric-list > article, .founder-panels > article').forEach(element => {
    element.classList.add('editorial-reveal');
    reveal.observe(element);
  });
  document.querySelectorAll('.method-editorial-steps > li').forEach(element => {
    element.classList.add('method-reveal');
    reveal.observe(element);
  });
})();

// Native sticky cards: scrolling controls the stack, with an ordinary list fallback.
(() => {
  const stack = document.querySelector('.project-stack');
  if (!stack) return;
  const cards = [...stack.querySelectorAll('.project-tile')];
  const links = [...document.querySelectorAll('.portfolio-progress a')];
  const media = matchMedia('(min-height: 680px) and (prefers-reduced-motion: no-preference)');
  let pending = false;
  const draw = () => {
    pending = false;
    const enabled = media.matches && !document.body.classList.contains('effects-paused');
    stack.classList.toggle('is-stacking', enabled);
    let active = 0;
    cards.forEach((card, i) => {
      const next = cards[i + 1];
      const progress = enabled && next ? Math.min(1, Math.max(0, (innerHeight - next.getBoundingClientRect().top) / (innerHeight - 116))) : 0;
      card.style.setProperty('--retreat', progress.toFixed(3));
      card.style.zIndex = String(i + 1);
      card.inert = enabled && progress >= .995;
      if (card.getBoundingClientRect().top < innerHeight * .45) active = i;
    });
    links.forEach((link, i) => { if (i === active) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current'); });
  };
  const schedule = () => { if (!pending) { pending = true; requestAnimationFrame(draw); } };
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  media.addEventListener('change', schedule);
  document.addEventListener('site-effects-change', schedule);
  draw();
})();
