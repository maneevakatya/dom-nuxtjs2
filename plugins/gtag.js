import Vue from 'vue'
import data from '~/data'

const isProd = process.env.NUXT_ENV_ANALYTICS === 'production'
export default ({ app }) => {
	if (!app.mixins) app.mixins = []

	Vue.mixin({
		methods: {
			sendGA(category, action, label) {
				if (isProd) {
					// eslint-disable-next-line
					gtag('event', action, {
						event_category: category,
						event_label: label,
					})
				} else {
					// eslint-disable-next-line
					console.log(`ga ${category} ${action} ${label}`)
				}
			},
		},
	})
	app.mixins.push({
		mounted() {
			if (data.statistics.PAGE_LOAD_EVENT) {
				const v = this
				window.addEventListener('load', function () {
					v.$nuxt.sendGA('internal', 'load', 'main')
				})
			}
		},
	})

	app.router.afterEach((to) => {
		// eslint-disable-next-line
		gtag('config', data.statistics.GA_ID, {
			page_path: to.path,
		})
	})
}
