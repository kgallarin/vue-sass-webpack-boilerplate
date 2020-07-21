import Vue from 'vue';
import Router from 'vue-router';
import Home from '@components/views/Home';

// 404
import PageNotFound from '@components/views/PageNotFound';

import store from '@store';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home',
      meta: {
        layout: 'default',
        guest: true,
      },
    },
    { path: "*", component: PageNotFound }
  ],
})
export default router;
