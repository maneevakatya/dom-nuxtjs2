export { default as Logo } from '../../components/Logo.vue'
export { default as Footer } from '../../components/layout/Footer.vue'
export { default as Header } from '../../components/layout/Header.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyFooter = import('../../components/layout/Footer.vue' /* webpackChunkName: "components/layout/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/layout/Header.vue' /* webpackChunkName: "components/layout/Header" */).then(c => c.default || c)
