(() => {
  const method = document.querySelector('.process-chapter');
  const portfolio = document.querySelector('#projets');
  const carousel = portfolio.querySelector('.pf-carousel');
  const track = carousel.querySelector('.pf-track');
  const rail = document.createElement('div');
  rail.className = 'project-rail';
  carousel.before(rail);
  rail.append(carousel);
  const motion = matchMedia('(min-width: 960px) and (min-height: 580px) and (prefers-reduced-motion: no-preference)');
  const cards = Array.from(method.querySelectorAll('article'));
  function update() {
    const enabled = motion.matches && !document.body.classList.contains('effects-paused');
    method.classList.toggle('chapter-active', enabled);
    const travel = Math.max(1, method.offsetHeight - innerHeight);
    const progress = Math.min(1, Math.max(0, -method.getBoundingClientRect().top / travel));
    const current = Math.min(cards.length - 1, Math.floor(progress * cards.length));
    cards.forEach((card, index) => { card.hidden = enabled && index !== current; });
    method.dataset.step = String(current + 1);
    method.style.setProperty('--sweep', (progress * 360) + 'deg');
    const distance = track.scrollWidth - track.clientWidth;
    const pinned = enabled && distance > 1;
    rail.classList.toggle('rail-active', pinned);
    const inset = Math.min(72, innerHeight - carousel.offsetHeight);
    rail.style.setProperty('--rail-top', inset + 'px');
    rail.style.height = pinned ? (distance + carousel.offsetHeight) + 'px' : '';
    if (pinned) track.scrollLeft = Math.min(distance, Math.max(0, inset - rail.getBoundingClientRect().top));
  }
  addEventListener('scroll', update, {passive:true});
  addEventListener('resize', update);
  addEventListener('load', update);
  document.addEventListener('site-effects-change', update);
  motion.addEventListener('change', update);
  update();
})();
