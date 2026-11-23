// A short, optional brand signature. Never lock scrolling, focus or navigation.
(() => {
  const sessionKey = 'ecospheare-site-intro-v1';
  const run = () => {
    let overlay;
    let loadingTimer;
    let releaseTimer;
    let finished = false;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const inputEvents = ['pointerdown', 'keydown', 'wheel', 'touchstart', 'scroll'];
    const finish = () => {
      if (finished) return;
      finished = true;
      clearTimeout(loadingTimer);
      clearTimeout(releaseTimer);
      overlay?.remove();
      inputEvents.forEach(type => window.removeEventListener(type, finish, true));
      window.removeEventListener('pagehide', finish);
      window.removeEventListener('hashchange', finish);
      document.removeEventListener('visibilitychange', onVisibility);
      motion.removeEventListener('change', onMotion);
    };
    const onVisibility = () => { if (document.hidden) finish(); };
    const onMotion = () => { if (motion.matches) finish(); };
    try {
      // Mark even skipped openings so following internal pages never replay it.
      // If session storage is unavailable, omit the intro instead of repeating it.
      if (sessionStorage.getItem(sessionKey)) return;
      sessionStorage.setItem(sessionKey, 'seen');
      const navigation = performance.getEntriesByType('navigation')[0];
      const fromThisSite = document.referrer && new URL(document.referrer).origin === location.origin;
      if (location.hash || fromThisSite || navigation?.type === 'back_forward' || navigation?.type === 'reload'
        || motion.matches || navigator.connection?.saveData || document.hidden || document.prerendering
        || document.querySelector('.site-intro, .space-intro')
        || getComputedStyle(document.documentElement).getPropertyValue('--site-intro-ready').trim() !== '1') return;

      inputEvents.forEach(type => window.addEventListener(type, finish, { capture: true, passive: true }));
      window.addEventListener('pagehide', finish, { once: true });
      window.addEventListener('hashchange', finish, { once: true });
      document.addEventListener('visibilitychange', onVisibility);
      motion.addEventListener('change', onMotion);
      // Slow or failed assets must not postpone the visitor's access to the site.
      loadingTimer = setTimeout(finish, 350);
      const image = (src, className, width, height) => new Promise((resolve, reject) => {
        const element = new Image(width, height);
        element.className = className;
        element.alt = '';
        element.decoding = 'async';
        element.onload = () => {
          const decoded = element.decode ? element.decode() : Promise.resolve();
          decoded.then(() => resolve(element), reject);
        };
        element.onerror = reject;
        element.src = src;
      });
      Promise.all([
        image('/assets/ecospheare-logo-white.svg', 'site-intro__symbol', 338, 405),
        image('/assets/ecospheare-wordmark-white.png', 'site-intro__name', 850, 130),
      ]).then(images => {
        if (finished || document.hidden || motion.matches || location.hash || scrollY > 0) { finish(); return; }
        clearTimeout(loadingTimer);
        overlay = document.createElement('div');
        overlay.className = 'site-intro';
        overlay.setAttribute('aria-hidden', 'true');
        const identity = document.createElement('div');
        identity.className = 'site-intro__identity';
        identity.append(...images);
        overlay.append(identity);
        overlay.addEventListener('animationend', event => { if (event.target === overlay) finish(); });
        // Arm removal before insertion; CSS also hides the overlay at 1.05 seconds.
        releaseTimer = setTimeout(finish, 1200);
        document.body.append(overlay);
      }).catch(finish);
    } catch {
      finish();
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, { once: true });
  else run();
})();
