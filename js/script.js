const swiper = new Swiper('.slider', {
  centeredSlides: true,
  slidesPerView: "auto",

  loop: true,
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },
});


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