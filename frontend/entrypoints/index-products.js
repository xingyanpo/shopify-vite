import Swiper from 'swiper';    
import 'swiper/css';
import { forEach } from 'lodash';

const mySwiper = new Swiper('.index-products-swiper', {});
const swiperSlides = document.querySelectorAll('.index-products-swiper .swiper-slide');
forEach(swiperSlides, (slide) => {
  console.log(slide);
});
const swiperWrap = document.querySelector('.index-products-swiper');
const div = document.createElement('div');
div
.styles`background-color: red;color: white;${'font-size: 20px;'}`
.props`id:my-div;title: "this is a div";`
.content`Hello, world!`
swiperWrap.appendChild(div);