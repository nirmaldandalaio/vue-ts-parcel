import Vue from 'vue'
import Router from 'vue-router'
import HeroPage from '../HeroPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HeroPage,
    },
  ]
})
