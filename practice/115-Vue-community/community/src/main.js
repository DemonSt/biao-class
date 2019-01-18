import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'; 
import './css/global.css';

import Home from './page/Home.vue';
import About from './page/About.vue';
import Signup from './page/Signup.vue';
import Login from './page/Login.vue';
import Setting from './page/Settings.vue';
Vue.config.productionTip = false

Vue.use(Router);

new Vue({
  render: h => h(App),
  router : new Router({
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/signup',
        component: Signup
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
