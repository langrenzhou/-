import Vue from "vue"
import vuerouter from "vue-router"
  Vue.use(vuerouter)
const routes=[
    {
        name:"index",
        path:"/",
        component:()=>import("../components/index.vue")
    },
]
const router=new vuerouter({
    routes
}) 
export default router