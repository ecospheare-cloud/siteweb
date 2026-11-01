(() => {
  const frame = document.querySelector("[data-agency-film]");
  if (!frame) return;

  const video = frame.querySelector("video");
  const button = frame.querySelector(".agency-film-play");
  const label = button?.querySelector(".agency-film-play__label");
  if (!video || !button) return;

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
