import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [

]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
