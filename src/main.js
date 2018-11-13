import Vue from 'vue'
import http from './http'
import App from './App.vue'
import router from './router'
import store from './store'
import './vueFilter'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
