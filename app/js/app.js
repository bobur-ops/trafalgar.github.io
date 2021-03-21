import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);
import { Swiper, Mousewheel, Controller } from 'swiper'
Swiper.use([ Mousewheel ])

document.addEventListener('DOMContentLoaded', () => {

	const swiperIMG = new Swiper('.slider-img', {
		loop: false,
		speed: 1500,
		pagination: {
			el: '.swiper-pagination',
		},
		mousewheel: {
			invert: false,
		}
	})

})
