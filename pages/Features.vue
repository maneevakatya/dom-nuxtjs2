<template lang="pug">
	section.features
		.wrapper
			.features__content
				.features__text
					p.features__title.h-anim Мы уверены, что умный дом -
						br
						| это взаимодействие систем,
						br
						| управляемых из одного приложения
					p.features__subtitle.h-anim Работаем с множеством производителей
					ul.features__list
						li.features__item.h-anim Все наши системы "модульные" - вам не обязательно интегрировать все инженерные системы дома, можно выбрать только необходимое
						li.features__item.h-anim Все наши cистемы имеют отдельные родные приложения - мы объединяем эти приложения в одно
						li.features__item.h-anim Инженерная поддержка
							br
							| в течение года - дописываем алгоритмы под вас
						li.features__item.h-anim Если какая-то система выйдет
							br
							| из строя - другие продолжат работать
				.features__img
					<House class="features__img h-anim"/>
</template>

<script>
import { elemVisCheck } from '@/helpers/index'

import House from '@/assets/svg/smarthome1.svg'
export default {
	components: {
		House,
	},
	mounted() {
		setTimeout(() => {ç
			document.querySelector('.features').setAttribute('loaded', true)
		}, 100)
		window.addEventListener('scroll', this.pageScroll)
		elemVisCheck()
		// setTimeout(() => {
		// 	window.addEventListener('wheel', this.scrollHandler)
		// }, 1000)
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
				document.querySelector('.features').removeAttribute('loaded')
				this.$router.push('/systems')
			}, 200)
		},
		nextScreen() {
			setTimeout(() => {
				document.querySelector('.features').removeAttribute('loaded')
				this.$router.push('/company')
			}, 200)
		},
	},
}
</script>
