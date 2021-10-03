let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');
let bod = document.querySelector('.hamburger__container');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});