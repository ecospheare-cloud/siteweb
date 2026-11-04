(() => {
  const frame = document.querySelector("[data-agency-film]");
  if (!frame) return;

  const video = frame.querySelector("video");
  const button = frame.querySelector(".agency-film-play");
  const label = button?.querySelector(".agency-film-play__label");
  if (!video || !button) return;
  const mobileMedia = window.matchMedia("(max-width: 800px)");

  const updatePoster = () => {
    const poster = mobileMedia.matches ? video.dataset.mobilePoster : video.dataset.desktopPoster;
    if (poster && video.getAttribute("poster") !== poster) video.setAttribute("poster", poster);
  };

  const scene = frame.closest(".film-scroll");
  if (scene) {
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    let pending = false;

    function draw() {
      pending = false;
      if (!scene.classList.contains("scroll-enabled")) {
        button.hidden = false;
        video.controls = true;
        return;
      }
      const travel = scene.offsetHeight - scene.firstElementChild.offsetHeight;
      const progress = Math.min(1, Math.max(0, -scene.getBoundingClientRect().top / Math.max(1, travel)));
      // Leave the last part of the pinned scene available for starting playback.
      const zoom = Math.min(1, progress / 0.85);
      const ready = zoom === 1 || frame.classList.contains("is-playing");
      button.hidden = !ready;
      video.controls = ready;
      const start = mobileMedia.matches ? 72 : 30;
      const end = mobileMedia.matches ? 97 : 94;
      const width = frame.classList.contains("is-playing") ? end : start + (end - start) * zoom;
      frame.style.setProperty("--film-width", width + "vw");
    }

    function schedule() {
      if (pending) return;
      pending = true;
      requestAnimationFrame(draw);
    }

    function syncEffects() {
      scene.classList.toggle("scroll-enabled", !reducedMotion.matches && !document.body.classList.contains("effects-paused"));
      draw();
    }

    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    video.addEventListener("play", schedule);
    video.addEventListener("ended", schedule);
    document.addEventListener("site-effects-change", syncEffects);
    reducedMotion.addEventListener("change", syncEffects);
    syncEffects();
  }

  updatePoster();
  mobileMedia.addEventListener?.("change", updatePoster);

  button.addEventListener("click", async () => {
    try {
      await video.play();
    } catch (_) {
      video.controls = true;
    }
  });

  video.addEventListener("play", () => frame.classList.add("is-playing"));
  video.addEventListener("pause", () => {
    if (!video.ended) return;
    frame.classList.remove("is-playing");
  });
  video.addEventListener("ended", () => {
    frame.classList.remove("is-playing");
    if (label) label.textContent = "Revoir le film · 47 s";
  });
})();

// Diffuse the actual frame colours onto the glass behind the player.
(() => {
  const stage = document.querySelector('#film .film-sticky');
  const video = stage?.querySelector('video');
  if (!video) return;
  const light = document.createElement('canvas');
  light.width = 24; light.height = 14; light.className = 'film-reflection';
  light.setAttribute('aria-hidden','true');
  stage.prepend(light);
  const ctx = light.getContext('2d');
  if (!ctx) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let timer;
  function sync() {
    clearInterval(timer);
    const on = !video.paused && !video.ended && !document.hidden && !reduced.matches && !document.body.classList.contains('effects-paused');
    stage.classList.toggle('reflecting', on);
    if (on) {
      const paint = () => { if (video.readyState >= 2) ctx.drawImage(video,0,0,24,14); };
      paint(); timer = setInterval(paint, 160);
    }
  }
  for (const event of ['playing','pause','ended','emptied']) video.addEventListener(event,sync);
  reduced.addEventListener('change',sync);
  document.addEventListener('visibilitychange',sync);
  document.addEventListener('site-effects-change',sync);
})();
