import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export const aboutSwiper = new Swiper('.aboutSwiper', {
  modules: [Navigation, Pagination, Autoplay, Scrollbar],
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.aboutSwiper__button-next',
    prevEl: '.aboutSwiper__button-prev',
  },
  pagination: {
    el: '.aboutSwiper__pagination-bullets',
    type: 'bullets',
    clickable: true,
  },
  paginationFraction: {
    el: '.about__pagination-fraction',
    type: 'fraction',
    renderFraction: function(currentClass, totalClass) {
      return (
        '<span class="'
        + currentClass
        + '"></span>'
        + '<span class="divider">/</span>'
        + '<span class="'
        + totalClass
        + '"></span>'
      );
    },
  },
  scrollbar: {
    el: '.aboutSwiper__scrollbar',
  },
  autoplay: {
    delay: 3000,
  },
});

const fractionEl = document.querySelector('.about__pagination-fraction');

function updateFraction() {
  fractionEl.innerHTML = `
    <span class="current">${aboutSwiper.realIndex + 1}</span>
    <span class="divider">/</span>
    <span class="total">${aboutSwiper.slides.length}</span>
  `;
}

updateFraction();
aboutSwiper.on('slideChange', updateFraction);
