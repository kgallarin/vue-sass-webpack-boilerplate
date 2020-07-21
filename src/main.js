import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import router from './routes';
import { ClickOutside, EventBus } from './plugins';
import Transitions from 'vue2-transitions';

import './styles/app.scss';

/**
  Clicking Outside event directive
**/

Vue.use(ClickOutside);

/**
  Event bus
**/

Vue.use(EventBus);

/**
  Routing
**/

Vue.use(VueRouter);

/**
  Vue Transitions
**/

Vue.use(Transitions)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
