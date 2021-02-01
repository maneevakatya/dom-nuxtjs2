<template lang="pug">
	header.header(:class="{ 'header--about' : page === 'About', 'header--equipment' : page === 'Equipment', 'header--features' : page === 'Features', 'header--systems' : page === 'Systems', 'header--company' : page === 'Company' }")
		.wrapper
			<NuxtLink to="/" :class="{ 'header__logo--active': page === 'index' }">
				<Logo />
			</NuxtLink>
			nav.nav
				ul.nav__list
					li.nav__item
						a.nav__link(@click="scroll('.about')" :class="{ 'nav__link--active': page === 'About' || page === 'Equipment' }" ) Умный дом
					li.nav__item
						a.nav__link(@click="scroll('.systems')" :class="{ 'nav__link--active': page === 'Systems' }" ) Системы
					li.nav__item
						a.nav__link(:class="{ 'nav__link--active': page === 'Company' || page === 'Features' }" ) О нас
					li.nav__item
						a.nav__link(:class="{ 'nav__link--active': page === 'Calculator' }") Стоимость
			a(href="tel: +7 912 939 19 75").header__phone +7 912 939 19 75
			button.header__btn.btn Заказать

</template>

<script>
import { qs, scrollTo } from "@/helpers/index"

export default {
	computed: {
		page() {
			return this.$route.name !== undefined ? this.$route.name : this.$route
		},
	},
	methods:{
		scroll(to){
			if(scrollTo(qs(to)))
				scrollTo(qs(to, 0, 'linear'))
		}
	}
}
</script>
