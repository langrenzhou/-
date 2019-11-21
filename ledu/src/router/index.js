import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import("@/components/body_s")
  },
  {
    path: '/details',
    name: 'b',
    component: ()=>import("@/components/details")
  }
]

const router = new VueRouter({
  routes
})

export default router
