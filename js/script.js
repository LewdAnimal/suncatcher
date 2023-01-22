const swiper = new Swiper('.slider', {
  centeredSlides: true,
  slidesPerView: "auto",

  loop: true,
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },
});


let
  burger = document.querySelector('.burger'),
  mobile_menu = document.querySelector('.mobile-menu');

burger.onclick = function () {
  this.classList.toggle("burger--open");

  if (this.classList.contains("burger--open")) {
    mobile_menu.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  else {
    mobile_menu.style.display = 'none';
    document.body.style.overflow = 'visible';
  }
}



let
  order_buttom = document.querySelectorAll('.order-button'),
  order_window = document.querySelector('.order-window'),
  overlay = document.createElement('div');

order_buttom.forEach(function (item) {

  item.onclick = function () {
    overlay.className = 'overlay';
    document.body.prepend(overlay);
    order_window.style.display = 'block';
  }
});


overlay.onclick = function () {
  order_window.style.display = 'none';
  document.body.removeChild(overlay);
}


const project_slider = new Swiper('.project-slider__items', {
  slidesPerView: "auto",
  spaceBetween: 40,
  scrollbar: {
    el: ".swiper-scrollbar"
  },
});


let
  faq_item = document.querySelectorAll('.faq__item');

faq_item.forEach(function (item) {
  let answer = item.querySelector('.faq__answer');
  console.log(answer);
  item.onclick = function () {
    faq_item.forEach(function (item) {
      let answer = item.querySelector('.faq__answer');
      answer.classList.remove('faq__answer--activ');
    });
    answer.classList.add('faq__answer--activ');
  }
});