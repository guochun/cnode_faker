import Vue from 'vue'
import Router from 'vue-router'

import Articel from './components/Articel.vue'
import PostList from './components/PostList.vue'
import UserInfo from './components/UserInfo.vue'
import SliderBar from './components/SliderBar.vue'

Vue.use(Router)

const routes = [
  {
    name: 'root',
    path: '/',
    components: {
      main: PostList
    }
  },
  {
    name: 'post_content',
    path: '/topic/:id&author=:name',
    components: {
      main: Articel,
      sliderBar: SliderBar
    }
  },
  {
    name: 'user_info',
    path: '/userinfo/:name',
    components: {
      main: UserInfo
    }
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
