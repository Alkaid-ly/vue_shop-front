//该文件专门用于创建整个应用的路由器
import Vue from 'vue'
import Router from "vue-router";
import login from "@/components/login";
import home from "@/components/home";
Vue.use(Router)
const router = new Router({
    routes:[
        {
            path:'/',
            redirect:'login'
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/home',
            component:home
        }
    ]
})
router.beforeEach((to, from, next)=>{
    if(to.path=='/login')next();
   // 如果用户有token，则放行
    if(window.sessionStorage.getItem('token'))
        next()
   // 否则遣送登录
    else {
        next('login')
    }
})
export default router
