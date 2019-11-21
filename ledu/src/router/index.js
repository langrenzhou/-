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
    path: '/a',
    name: 'b',
    component: ()=>import("@/components/b")
  },
  {
    path: '/b',
    name: 'a',
    component: ()=>import("@/components/b")
  }
]

const router = new VueRouter({
  routes
})

export default router
