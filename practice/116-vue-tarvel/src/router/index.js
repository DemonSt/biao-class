import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue';
import City from '@/pages/city/City.vue';
import Detail from '@/pages/detail/Detail.vue';
import Intro from '@/pages/intro/Intro.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/city',
            name: 'City',
            component: City
        },
        {
            path: '/detail/:id',   // 动态绑定 加 :id 做错了一次
            name: 'Detail',
            component: Detail
        },
        {
            path: '/intro/',
            name: 'Intro',
            component: Intro
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
});