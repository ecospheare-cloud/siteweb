(() => {
  const film = document.querySelector('.intro-film video');
  if (film) {
    film.addEventListener('play', () => { film.controls = true; });
    film.addEventListener('ended', () => { film.controls = false; });
  }
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
  document.querySelectorAll('.selected-project-image, .method-editorial-steps > li, .metric-list > article, .founder-panels > article').forEach(element => {
    element.classList.add('editorial-reveal');
    reveal.observe(element);
  });
})();
