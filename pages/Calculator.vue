<template lang="pug">
	section.calculator
		.wrapper
			.calculator__content
				p.calculator__title Мы сделали калькулятор стоимости
</template>
<script>
export default {
	mounted() {
		setTimeout(() => {
			document.querySelector('.calculator').setAttribute('loaded', true)
		}, 100)
		setTimeout(() => {
			window.addEventListener('wheel', this.scrollHandler)
		}, 1000)
	},
	methods: {
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
				document.querySelector('.calculator').removeAttribute('loaded')
				this.$router.push('/steps')
			}, 200)
		},
		nextScreen() {
			setTimeout(() => {
				document.querySelector('.calculator').removeAttribute('loaded')
				this.$router.push('/request')
			}, 200)
		},
	},
}
</script>
