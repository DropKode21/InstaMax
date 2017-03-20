import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './Home.vue';

import store from './overvue/store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/feed', component: App },
  ],
});

store.createStateStream().subscribe(state => console.log('Initial State', state));

const vmApp = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(Home),
});
// .$mount('#app');

// const vmLogin = new Vue({
//   el: '#loginApp',
//   store,
//   render: h => h(Home),
// });
