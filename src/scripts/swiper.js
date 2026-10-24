import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
  pagination: {
    el: '.swiper__pagination',
  },
  autoplay: {
    delay: 3000,
  },
});
