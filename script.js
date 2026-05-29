// Promo bar dismiss
const promoBar = document.getElementById('promoBar');
const promoClose = document.getElementById('promoClose');
if (promoClose && promoBar) {
  promoClose.addEventListener('click', () => {
    promoBar.classList.add('hidden');
    sessionStorage.setItem('promoClosed', '1');
  });
  if (sessionStorage.getItem('promoClosed')) promoBar.classList.add('hidden');
}

// Nav scroll shadow
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile burger
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  mobileMenu.setAttribute('aria-hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
});
mobileMenu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}));
document.addEventListener('click', e => {
  if (mobileMenu.classList.contains('open') && !nav.contains(e.target)) {
    mobileMenu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});

// Smooth scroll with nav offset
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 12;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
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
document.querySelectorAll('.service-card, .seo-pillar, .process-step, .value-item, .faq-item, .blog-card, .stat-item').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ Message envoyé — on revient vers vous sous 24h !';
    btn.style.background = '#16a34a';
    btn.style.borderColor = '#16a34a';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
      form.reset();
    }, 5000);
  });
}
