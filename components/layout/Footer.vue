<template lang="pug">
	footer.footer(:class="{ 'footer--index' : page === 'index', 'footer--systems' : page === 'Systems' }")
		<Arrow class="footer__arrow"/>
</template>

<script>
import Arrow from '@/assets/svg/footer-arrow.svg'

export default {
	components: {
		Arrow,
	},
	computed: {
		page() {
			return this.$route.name !== undefined ? this.$route.name : this.$route
		},
	},
}
</script>
