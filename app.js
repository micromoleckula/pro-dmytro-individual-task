document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const closeButton = document.getElementById('burger-close');
  const menu = document.getElementById('menu');

  burger.addEventListener('click', () => {
    // Меню становится активным
    menu.classList.add('active');

    // Скрывается иконка бургер-меню
    burger.classList.add('hidden');

    // Отображается кнопка закрытия
    closeButton.classList.add('active');
    // Если она тоже скрыта изначально, убираем у нее класс .hidden
    closeButton.classList.remove('hidden');
  });

  closeButton.addEventListener('click', () => {
    // Меню перестаёт быть активным
    menu.classList.remove('active');

    // Появляется обратно бургер-меню
    burger.classList.remove('hidden');

    // Кнопка закрытия исчезает
    closeButton.classList.remove('active');
    closeButton.classList.add('hidden');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  // При скроле проверяется, сколько уже прокручено
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Ниже можно добавить остальную логику для бургера/меню, если это требуется
  // ...
});