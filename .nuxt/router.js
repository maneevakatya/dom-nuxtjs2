import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3b5292e2 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _296a1ff0 = () => interopDefault(import('../pages/Calculator.vue' /* webpackChunkName: "pages/Calculator" */))
const _ed7a7602 = () => interopDefault(import('../pages/Company.vue' /* webpackChunkName: "pages/Company" */))
const _875de9e0 = () => interopDefault(import('../pages/Equipment.vue' /* webpackChunkName: "pages/Equipment" */))
const _d4d13daa = () => interopDefault(import('../pages/Features.vue' /* webpackChunkName: "pages/Features" */))
const _3fcd2b0d = () => interopDefault(import('../pages/Index1.vue' /* webpackChunkName: "pages/Index1" */))
const _f931edae = () => interopDefault(import('../pages/Steps.vue' /* webpackChunkName: "pages/Steps" */))
const _4d1b3126 = () => interopDefault(import('../pages/Systems.vue' /* webpackChunkName: "pages/Systems" */))
const _eac71d18 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _3b5292e2,
    name: "About"
  }, {
    path: "/Calculator",
    component: _296a1ff0,
    name: "Calculator"
  }, {
    path: "/Company",
    component: _ed7a7602,
    name: "Company"
  }, {
    path: "/Equipment",
    component: _875de9e0,
    name: "Equipment"
  }, {
    path: "/Features",
    component: _d4d13daa,
    name: "Features"
  }, {
    path: "/Index1",
    component: _3fcd2b0d,
    name: "Index1"
  }, {
    path: "/Steps",
    component: _f931edae,
    name: "Steps"
  }, {
    path: "/Systems",
    component: _4d1b3126,
    name: "Systems"
  }, {
    path: "/",
    component: _eac71d18,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
