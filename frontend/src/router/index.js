import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import My from '@/views/My.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/my',
    name: 'My',
    component: My
  }
]

const router = new VueRouter({
  routes
})

export default router
