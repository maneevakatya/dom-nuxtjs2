<template lang="pug">
	section.company
		.wrapper
			.company__content
				p.company__title О нас
				ul.company__list
					li.company__item наша компания специализируется
						br
						| на шкафах автоматизации зданий
					li.company__item обладаем высокой экспертностью в построении систем автоматизации
					li.company__item работаем
						b  5 лет
						br
						|  рынке домашней автоматизации
					li.company__item сделали более
						br
						b  1000
						|  локальных
						br
						| систем автоматики
					li.company__item воплотили
						br
						b  3 умных дома
						br
						|   с максимальным количество функций
					li.company__item спроектировали
						br
						b  14 умных домов
</template>

<script>
export default {
	mounted() {
		setTimeout(() => {
			document.querySelector('.company').setAttribute('loaded', true)
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
				document.querySelector('.company').removeAttribute('loaded')
				this.$router.push('/features')
			}, 200)
		},
		nextScreen() {
			setTimeout(() => {
				document.querySelector('.company').removeAttribute('loaded')
				this.$router.push('/steps')
			}, 200)
		},
	},
}
</script>
