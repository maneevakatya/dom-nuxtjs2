<template lang="pug">
	section.about
		.about__illustrations
			<Man class="about__img h-anim"/>
			//- img(src="../assets/svg/man.png").about__img
		.about__blocks
			.about__block.h-anim
				p.about__title.h-anim
					b Умный дом -
					br
					|  не только
					br
					| управление светом
					br
					| с телефона
				<NuxtLink to="/equipment" class="about__link btn h-anim">Разобраться в умном доме</NuxtLink>
			.about__block.about__block--blue.h-anim
				p.about__title
					b Умный дом -
					br
					|  это связь между инженерными системами дома
</template>

<script>
import { elemVisCheck } from '@/helpers/index'
import Man from '@/assets/svg/man3.svg'

export default {
	components: {
		Man,
	},
	mounted() {
		setTimeout(() => {
			document.querySelector('.about').setAttribute('loaded', true)
		}, 200)
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
				document.querySelector('.about').removeAttribute('loaded')
				this.$router.push('/')
			}, 200)
		},
		nextScreen() {
			setTimeout(() => {
				document.querySelector('.about').removeAttribute('loaded')
				this.$router.push('/equipment')
			}, 200)
		},
	},
}
</script>
