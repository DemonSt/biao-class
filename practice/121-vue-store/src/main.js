import Vue from 'vue'
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './css/global.css';
import App from './App.vue'

import Home from './page/Home.vue';
import Product from './page/Product.vue';
import Search from './page/Search.vue';
import Login from './page/Login.vue';
import Setting from './page/Settings.vue';

Vue.use(ElementUI);
Vue.use(Router);

new Vue({
  render: h => h(App),
  router: new Router({
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/product/:id',
        component: Product
      },
      {
        path: '/search',
        component: Search
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/setting',
        component: Setting 
      },
    ],
  }),
}).$mount('#app')

//  首先引入Router  使用Router 配置Router 
