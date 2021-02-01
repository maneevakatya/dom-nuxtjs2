<template lang="pug">
	header.header(:class="{ 'header--about' : page === 'About', 'header--equipment' : page === 'Equipment', 'header--features' : page === 'Features', 'header--systems' : page === 'Systems', 'header--company' : page === 'Company' }")
		.wrapper
			<NuxtLink to="/" :class="{ 'header__logo--active': page === 'index' }">
				<Logo />
			</NuxtLink>
			nav.nav
				ul.nav__list
					li.nav__item
						<NuxtLink  to="/about" class="nav__link" :class="{ 'nav__link--active': page === 'About' || page === 'Equipment' }"> Умный дом</NuxtLink>
					li.nav__item
						<NuxtLink  to="/systems" class="nav__link" :class="{ 'nav__link--active': page === 'Systems' }">Системы</NuxtLink>
					li.nav__item
						<NuxtLink  to="/features" class="nav__link" :class="{ 'nav__link--active': page === 'Company' || page === 'Features' }">О нас</NuxtLink>
					li.nav__item
						<NuxtLink  to="/calculator" class="nav__link" :class="{ 'nav__link--active': page === 'Calculator' }">Стоимость</NuxtLink>
			a(href="tel: +7 912 939 19 75").header__phone +7 912 939 19 75
			button.header__btn.btn Заказать

</template>

<script>
export default {
	computed: {
		page() {
			return this.$route.name !== undefined ? this.$route.name : this.$route
		},
	},
}
</script>
