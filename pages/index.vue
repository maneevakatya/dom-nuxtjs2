<template lang="pug">
	.index
		.wrapper
			.index__content
				h1.index__title
					b Умный
					br
					|
					b дом
					br
					|
					span под ключ
					br
					|
					span в Челябинске
	</template>

<script>
export default {
	computed: {
		key() {
			return this.$route.meta.key !== undefined
				? this.$route.meta.key
				: this.$route
		},
	},
	mounted() {
		setTimeout(() => {
			document.querySelector('.index').setAttribute('loaded', true)
		}, 200)
		setTimeout(() => {
			window.addEventListener('wheel', this.scrollHandler)
		}, 1000)
	},
	methods: {
		scrollHandler(e) {
			if (Math.sign(e.deltaY) > 0) {
				window.removeEventListener('wheel', this.scrollHandler)
				this.nextScreen()
			}
		},
		nextScreen() {
			setTimeout(() => {
				document.querySelector('.index').removeAttribute('loaded')
				this.$router.push('/about')
			}, 300)
		},
	},
}
</script>

<style lang="stylus"></style>
