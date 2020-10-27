import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainPage from '../components/pages/main-page.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
