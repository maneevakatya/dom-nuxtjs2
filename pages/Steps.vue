<template lang="pug">
	section.steps
		p.steps__title Как мы это делаем
		ol.steps__list
			li.steps__item Проект. Мы не верим в проекты за один день, практика показывает, что за один день можно сделать проект по управлению освещением (и то нет). Согласовываем наш проект с дизайнером.
			li.steps__item Техническое задание. Согласовываем интерфейсы и алгоритмы. Конечно, в процессе реализации от первоначального ТЗ можно отойти по желанию заказчика
			li.steps__item Составляем договор - мы несем ответственность
			li.steps__item Монтажные работы. Выполняем монтаж в оговоренные сроки в соответствии с проектами и ПУЭ. Собираем шкафы автоматики в нашем сборочном цехе.
			li.steps__item Пусконаладочные работы. Частично проводим на объекте, частично из офиса
			li.steps__item Передаем вам инструкцию пользователя с алгоритмами прописанными в системе в бумажном и электронном виде.
			li.steps__item В течении года корректируем алгоритмы, если что-то идет не так.
</template>

<script>
export default {
	mounted() {
		setTimeout(() => {
			document.querySelector('.steps').setAttribute('loaded', true)
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
				document.querySelector('.steps').removeAttribute('loaded')
				this.$router.push('/company')
			}, 200)
		},
		nextScreen() {
			setTimeout(() => {
				document.querySelector('.steps').removeAttribute('loaded')
				this.$router.push('/calculator')
			}, 200)
		},
	},
}
</script>
