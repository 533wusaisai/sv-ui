import Vue from 'vue'
import VueRouter from 'vue-router'//使用路由时，要引入vue-router


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: ()=>import('@/components/button/index.vue')
        },
        {
            path: '/dialog',
            component: ()=>import('@/components/dialog')
        },
        {
            path: '/dropdown',
            component: ()=>import('@/components/dropdown')
        }
    ]
})