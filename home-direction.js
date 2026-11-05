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
