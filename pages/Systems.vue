<template lang="pug">
	section.systems.h-anim
		.wrapper
			.systems__content
				.systems__left
					p.systems__title.h-anim Инженерные Системы,
						br
						| которые мы делаем
					ul.systems__list.systems__list--left.h-anim
						li.systems__item Электрика
						li.systems__item Видеодомофон
						li.systems__item Видеонаблюдение
						li.systems__item Бесшовный вайфай
						li.systems__item Охранная сигнализация
						li.systems__item Зональное отопление по комнатам
						li.systems__item Интеграция роботов-пылесосов и колонок в одно приложение
				.systems__picture
					<SmartHome2 class="systems__img h-anim"/>
				ul.systems__list.systems__list--right.h-anim
					li.systems__item Управление
					li.systems__item котлами
					li.systems__item освещением
					li.systems__item розетками
					li.systems__item вентиляцией
					li.systems__item кондиционированием

					li.systems__item рольставнями и шторами
					li.systems__item водоснабжением
						p (протечки и набор воды
							br
							| по счетчику в ванную)
				.systems__btn.h-anim
					a.systems__link.btn Заказать умный дом
</template>

<script>
import { elemVisCheck } from '@/helpers/index'
import SmartHome2 from '@/assets/svg/smarthome2.svg'
export default {
	components: {
		SmartHome2,
	},
	mounted() {
		setTimeout(() => {
			document.querySelector('.systems').setAttribute('loaded', true)
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
				document.querySelector('.systems').removeAttribute('loaded')
				this.$router.push('/equipment')
			}, 200)
		},
		nextScreen() {
			setTimeout(() => {
				document.querySelector('.systems').removeAttribute('loaded')
				this.$router.push('/features')
			}, 200)
		},
	},
}
</script>
