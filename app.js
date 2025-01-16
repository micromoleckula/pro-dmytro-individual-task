document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const closeButton = document.getElementById('burger-close');
  const menu = document.getElementById('menu');

  burger.addEventListener('click', () => {
    menu.classList.add('active');
    burger.classList.add('hidden');
    closeButton.classList.add('active');
    closeButton.classList.remove('hidden');
  });

  closeButton.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('hidden');
    closeButton.classList.remove('active');
    closeButton.classList.add('hidden');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});