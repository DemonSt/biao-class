import Vue from 'vue'
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './css/global.css';
import App from './App.vue'

import api from './lib/api';

import Home from './page/Home.vue';
import Product from './page/Product.vue';
import Search from './page/Search.vue';
import Login from './page/Login.vue';
import Signup from './page/Signup.vue';
import Recover from './page/Recover.vue';
import My from './page/My.vue';
import Settings from './page/Settings.vue';
import Order from './page/Order.vue';
import Cart from './page/Cart.vue';

import AdminBase from './page/admin/Base.vue';
import AdminUser from './page/admin/User.vue';
import AdminOrder from './page/admin/Order.vue';
import AdminCat from './page/admin/Cat.vue';
import AdminBrand from './page/admin/Brand.vue';

window.api = api;

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
        path: '/signup',
        component: Signup 
      },
      {
        path: '/recover',
        component: Recover 
      },
      {
        path: '/my',
        component: My,
        children: [
          {
            path: 'settings',
            component: Settings
          },{
            path: 'order',
            component: Order
          },{
            path: 'cart',
            component: Cart
          }
        ]
      },
      {
        path: '/admin',
        component: AdminBase,
        children: [
          {
            path: 'user',
            component: AdminUser
          },{
            path: 'order',
            component: AdminOrder
          },{
            path: 'cat',
            component: AdminCat
          },{
            path: 'brand',
            component: AdminBrand
          }
        ]
      }
    ],
  }),
}).$mount('#app')

//  首先引入Router  使用Router 配置Router 
