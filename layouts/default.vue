<template lang="pug">
	main.main
		<Header />
		<Nuxt />
		<Footer />
</template>

<script>
export default {
	mounted() {
		setTimeout(() => {
			document.querySelector('main').setAttribute('loaded', true)
		}, 200)
	},
}
</script>
