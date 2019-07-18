import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import { routes } from './routes';
import './directives/Transform';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.http.options.root = 'http://localhost:3000';

const router = new VueRouter({
  routes,
  mode: 'history'
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
