// Hero particles
const heroParticles = document.getElementById('heroParticles');
if (heroParticles) {
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'hero__p';
    const size = Math.random() * 10 + 4;
    p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;bottom:-10%;animation-duration:${Math.random()*10+8}s;animation-delay:${Math.random()*8}s;opacity:${Math.random()*.15+.05}`;
    heroParticles.appendChild(p);
  }
}

// Promo bar
const promoBar = document.getElementById('promoBar');
const promoClose = document.getElementById('promoClose');
if (promoClose && promoBar) {
  if (sessionStorage.getItem('promoClosed')) promoBar.classList.add('hidden');
  promoClose.addEventListener('click', () => { promoBar.classList.add('hidden'); sessionStorage.setItem('promoClosed','1'); });
}

// Nav scroll
const nav = document.getElementById('nav');
const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    mobileMenu.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
    mobileMenu.classList.remove('open'); burger.classList.remove('open');
    burger.setAttribute('aria-expanded','false'); mobileMenu.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }));
  document.addEventListener('click', e => {
    if (mobileMenu.classList.contains('open') && !nav.contains(e.target)) {
      mobileMenu.classList.remove('open'); burger.classList.remove('open');
      burger.setAttribute('aria-expanded','false'); mobileMenu.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    }
  });
}

// Smooth scroll with nav offset
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - (nav ? nav.offsetHeight + 12 : 80), behavior: 'smooth' });
  });
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -28px 0px' });
document.querySelectorAll('.service-card, .seo-pillar, .process-step, .value-item, .faq-item, .blog-card, .prob-card, .change-item, .offre-card, .versus__table').forEach(el => {
  el.classList.add('reveal'); observer.observe(el);
});

// Contact form (native submit via formsubmit.co, just handle loading state)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', () => {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.textContent = 'Envoi en cours...'; btn.disabled = true; }
  });
}

// ══ RANKING ANIMATION ══
const rankingEl = document.getElementById('rankingAnim');
if (rankingEl) {
  let animated = false;
  const rankObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      startRankingAnim();
    }
  }, { threshold: 0.4 });
  rankObs.observe(rankingEl);
}

function startRankingAnim() {
  const badge = document.getElementById('rankBadge');
  const footer = document.getElementById('rankFooterText');
  const list = document.getElementById('rankingList');
  if (!list) return;

  // Phase 1 — show "Avant" state
  badge.textContent = 'Avant';
  badge.className = 'ranking-anim__badge before';
  footer.textContent = 'Situation actuelle';

  // Phase 2 — after 1.8s start animation
  setTimeout(() => {
    badge.textContent = 'En cours…';
    badge.className = 'ranking-anim__badge';
    badge.style.background = '#fef9c3'; badge.style.color = '#854d0e'; badge.style.border = '1px solid #fde68a';
    footer.textContent = 'Ecospheare optimise ton site…';

    // Animate "you" row moving up to position 1
    const rows = Array.from(list.querySelectorAll('.rank-row'));
    const youRow = list.querySelector('.rank-row--you');
    if (!youRow) return;

    // Remove from end, insert at beginning
    setTimeout(() => {
      list.removeChild(youRow);
      list.insertBefore(youRow, rows[0]);

      // Update positions
      Array.from(list.querySelectorAll('.rank-row')).forEach((r, i) => {
        r.querySelector('.rank-pos').textContent = i + 1;
      });

      youRow.classList.add('rank-first');
      youRow.querySelector('.rank-arrow').textContent = '↑';

      // Update badge
      setTimeout(() => {
        badge.textContent = 'Après';
        badge.className = 'ranking-anim__badge after';
        badge.style = '';
        footer.textContent = 'Ton site en première position 🎉';
      }, 400);

    }, 800);

  }, 1800);

  // Phase 3 — loop after 6s
  setTimeout(() => {
    // Reset and replay
    const rows = Array.from(list.querySelectorAll('.rank-row'));
    const youRow = list.querySelector('.rank-row--you');
    if (!youRow) return;
    youRow.classList.remove('rank-first');
    youRow.querySelector('.rank-arrow').textContent = '↓';
    list.removeChild(youRow);
    list.appendChild(youRow);
    Array.from(list.querySelectorAll('.rank-row')).forEach((r, i) => {
      r.querySelector('.rank-pos').textContent = i + 1;
    });
    animated = false;
    const rankingEl2 = document.getElementById('rankingAnim');
    if (rankingEl2) {
      const rankObs2 = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !animated) { animated = true; startRankingAnim(); }
      }, { threshold: 0.4 });
      rankObs2.observe(rankingEl2);
    }
  }, 7000);
}
