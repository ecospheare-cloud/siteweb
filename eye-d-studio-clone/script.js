// Mobile menu toggle
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
  burger.classList.toggle('open');
});

// Languages dropdown
document.querySelectorAll('.nav__dropdown-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.parentElement.classList.toggle('open');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.nav__dropdown.open').forEach((el) => el.classList.remove('open'));
});
