import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/festival',
        name: 'festival',
        component: () => import('../view/Festival.vue')
    },
    {
        path: '/festival/:id',
        name: 'festivalInfo',
        component: () => import('../view/FestivalInfo.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../view/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router