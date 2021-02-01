<template lang="pug">
	section.equipment.h-anim
		.wrapper
			.equipment__illustrations
				<Man class="equipment__img h-anim"/>
			.equipment__content
				.swiper-container.equipment__swiper.h-anim(v-swiper:firstSwiper="firstSwiperOptions" ref="firstSwiper" )
					.swiper-wrapper
						.swiper-slide.equipment__slide
							.equipment__item
								p.equipment__title Системы
									br
									| Климата
								a.equipment__link Подробнее
								//- ul.equipment__list
								//- 	li.equipment__item
								//- 		b Система отопления:
								//- 		| управление температурой в комнате и одновременно температурой пола.
								//- 	li.equipment__item
								//- 		b Система кондиционирования:
								//- 		| управление температурой и влажностью в комнате, согласовано с системой отопления
								//- 	li.equipment__item
								//- 		b Система вентиляции:
								//- 		| поддержание качества воздуха согласовано с отоплением и кондиционированием
						.swiper-slide.equipment__slide
							.equipment__item
								p.equipment__title Освещение
									br
									| и электрика
								a.equipment__link Подробнее
						.swiper-slide.equipment__slide
							.equipment__item
								p.equipment__title Безопасность
								a.equipment__link Подробнее
						.swiper-slide.equipment__slide
							.equipment__item
								p.equipment__title Взаимодействие
								a.equipment__link Подробнее
					.swiper-button-next
					.swiper-button-prev
					.swiper-pagination
				.swiper-container.equipment__swiperImgs.h-anim(v-swiper:secondSwiper='secondSwiperOptions' ref="secondSwiper" @slideChangeTransitionStart='slideChangeTransitionStart($refs.secondSwiper.swiper)' @slideChangeTransitionEnd='slideChangeTransitionEnd($refs.secondSwiper.swiper)')
					.swiper-wrapper
						.swiper-slide
							img.equipment__elem-img(src="../assets/img/temp.png")
						.swiper-slide
							img.equipment__elem-img(src="../assets/img/lamp.jpg")
						.swiper-slide
							img.equipment__elem-img(src="../assets/img/camera.png")
						.swiper-slide
							img.equipment__elem-img(src="../assets/img/integr.png")


</template>

<script>
import { elemVisCheck } from '@/helpers/index'
import Man from '@/assets/svg/man3.svg'
export default {
	components: {
		Man,
	},
	data() {
		return {
			firstSwiperOptions: {
				slidesPerView: 1,
				spaceBetween: 30,
				// loop: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'custom',
					renderCustom(swiper, current, total) {
						return current + ' / ' + total
					},
				},
				speed: 800,
			},
			secondSwiperOptions: {
				slidesPerView: 1,
				direction: 'vertical',
				// loop: true,
				spaceBetween: 30,
				speed: 800,
			},
		}
	},
	mounted() {
		setTimeout(() => {
			document.querySelector('.equipment').setAttribute('loaded', true)
		}, 100)
		window.addEventListener('scroll', this.pageScroll)
		elemVisCheck()
		setTimeout(() => {
			// window.addEventListener('wheel', this.scrollHandler)
			this.$refs.firstSwiper.swiper.controller.control = this.$refs.secondSwiper.swiper
			this.$refs.secondSwiper.swiper.controller.control = this.$refs.firstSwiper.swiper
		}, 1000)
	},
	methods: {
		pageScroll() {
			setTimeout(() => elemVisCheck(), 600)
		},
		scrollHandler(e) {
			if (
				window.pageYOffset + window.innerHeight ===
					document.body.offsetHeight &&
				Math.sign(e.deltaY) > 0
			) {
				window.removeEventListener('wheel', this.scrollHandler)
				this.nextScreen()
			} else if (window.pageYOffset === 0 && Math.sign(e.deltaY) < 0) {
				window.removeEventListener('wheel', this.scrollHandler)
				this.prevScreen()
			}
		},
		prevScreen() {
			setTimeout(() => {
				document.querySelector('.equipment').removeAttribute('loaded')
				this.$router.push('/about')
			}, 200)
		},
		nextScreen() {
			setTimeout(() => {
				document.querySelector('.equipment').removeAttribute('loaded')
				this.$router.push('/systems')
			}, 400)
		},
		slideChangeTransitionStart(swiper) {
			const $wrapperEl = swiper.$wrapperEl
			const params = swiper.params
			$wrapperEl
				.children('.' + params.slideClass + '.' + params.slideDuplicateClass)
				.each(function () {
					const idx = this.getAttribute('data-swiper-slide-index')
					this.innerHTML = $wrapperEl
						.children(
							'.' +
								params.slideClass +
								'[data-swiper-slide-index="' +
								idx +
								'"]:not(.' +
								params.slideDuplicateClass +
								')'
						)
						.html()
				})
		},

		slideChangeTransitionEnd(swiper) {
			swiper.slideToLoop(swiper.realIndex, 0, false)
		},
	},
}
</script>
