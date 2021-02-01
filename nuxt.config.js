import data from './data'
export default {
	env: {
		statistics: data.statistics,
	},
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: data.title,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'og:title', content: data.share.title },
			{ name: 'og:description', content: data.share.description },
			{ name: 'og:image', content: data.share.default_img },
			{ name: 'og:image:width', content: '968' },
			{ name: 'og:image:height', content: '504' },
			{ name: 'og:type', content: 'article' },
			{ name: 'og:site_name', content: data.url },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:image', content: data.share.default_img },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['~/assets/styles/imports.styl'],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		{ src: '~plugins/gtag.js', mode: 'client' },
		{ src: '~plugins/nuxt-swiper-plugin.js', mode: 'client' },
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/stylelint
		// '@nuxtjs/stylelint-module',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: ['nuxt-svg-loader', '@nuxtjs/device'],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},

	server: {
		port: process.env.PORT || 8080, // default: 3000
		host: '0.0.0.0', // default: localhost
	},
}
