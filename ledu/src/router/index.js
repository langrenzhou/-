import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import("@/components/Mine"),
    children:[
      {
        name:"channel",
        path:"channel/:id",
        component:()=>import("@/components/body_s")
      },
      {
        name:"detail_s",
        path:"detail_s/:id",
        component:()=>import("@/components/details_s")
      },
      {
        path:"about",
        component:()=>import("@/components/about")
      },
      {
        path:"join",
        component:()=>import("@/components/join")
      }
    ]
  },
  {
    name:"user",
    path:"/user/:id",
    component:()=>import("@/components/user")
  }
]

const router = new VueRouter({
  routes
})

export default router
