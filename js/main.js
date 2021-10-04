let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');
let bod = document.querySelector('.hamburger__container');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});


// Slider

class Slider {
  elements;
  buttons;
  position = 0;
  movePosition;
  maxPosition;

  constructor(wrapper, config) {
      this.elements = {
          container: wrapper.querySelector('.slider__container'),
          track: wrapper.querySelector('.slider__track'),
          items: wrapper.querySelectorAll('.slider__item')
      };

      this.buttons = {
          prev: wrapper.querySelector('.btn__prev'),
          next: wrapper.querySelector('.btn__next'),
      };

      const itemWidth = this.elements.container.clientWidth / config.slidesToShow
      this.movePosition = config.slidesToScroll * itemWidth;
      this.maxPosition = -(this.elements.items.length * itemWidth - config.slidesToShow * itemWidth);
      this.elements.items.forEach((item) => item.style.minWidth = `${itemWidth}px`);
      this.buttons.prev.addEventListener('click', () => this.handlePrevClick());
      this.buttons.next.addEventListener('click', () => this.handleNextClick());
      this.checkBtns();
  }

  handlePrevClick() {
      this.position += this.movePosition;
      if(this.position > 0) {
          this.position = 0;
      }
      this.setPosition();
      this.checkBtns();
  }

  handleNextClick() {
      this.position -= this.movePosition;
      if(this.position < this.maxPosition) {
          this.position = this.maxPosition;
      }
      this.setPosition();
      this.checkBtns();
  }

  setPosition() {
      this.elements.track.style.transform = `translateX(${this.position}px)`
  }

  checkBtns() {  
      this.buttons.prev.disabled = this.position === 0;
      this.buttons.next.disabled = this.position <= this.maxPosition;
  }
}

new Slider(document.querySelector('.widgets__wrapper'), {
slidesToShow: 2,
slidesToScroll: 1
});


