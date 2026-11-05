(() => {
  const frame = document.querySelector('[data-agency-film]');
  const dialog = document.querySelector('.agency-film-dialog');
  const video = frame?.querySelector('video');
  const play = frame?.querySelector('.agency-film-play');
  if (!video || !play || !dialog) return;
  const player = dialog.querySelector('.film-dialog-player');
  const fullscreen = dialog.querySelector('.film-fullscreen');
  const mobile = matchMedia('(max-width: 800px)');
  const syncFormat = () => {
    if (!video.videoWidth || !video.videoHeight) return;
    video.style.setProperty('--film-ratio', `${video.videoWidth} / ${video.videoHeight}`);
    dialog.classList.toggle('is-portrait', video.videoHeight > video.videoWidth);
  };
  video.addEventListener('loadedmetadata', syncFormat);
  syncFormat();
  const updatePoster = () => {
    const poster = mobile.matches ? video.dataset.mobilePoster : video.dataset.desktopPoster;
    if (poster) video.poster = poster;
  };
  updatePoster();
  mobile.addEventListener('change', updatePoster);
  play.addEventListener('click', () => {
    player.append(video);
    video.controls = true;
    syncFormat();
    dialog.showModal();
    document.documentElement.classList.add('film-dialog-open');
    document.dispatchEvent(new CustomEvent('ecospheare:dialog', { detail: true }));
    video.play().catch(() => { video.controls = true; });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    video.pause();
    video.controls = false;
    frame.prepend(video);
    document.documentElement.classList.remove('film-dialog-open');
    document.dispatchEvent(new CustomEvent('ecospheare:dialog', { detail: false }));
    play.focus({ preventScroll: true });
  });
  if (!video.requestFullscreen && !video.webkitEnterFullscreen) fullscreen.hidden = true;
  fullscreen.addEventListener('click', () => {
    if (video.requestFullscreen) video.requestFullscreen().catch(() => { video.controls = true; });
    else video.webkitEnterFullscreen?.();
  });
})();
