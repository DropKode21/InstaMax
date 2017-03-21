import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueRx from 'vue-rx';
// import Rx from 'rxjs/Rx';

import App from './App.vue';
import Home from './Home.vue';

import store from './overvue/store';

Vue.use(VueRouter);
// Vue.use(VueRx, Rx);


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/feed', component: App },
  ],
});

store.createStateStream().subscribe(state => console.log('Initial State', state));


// function fetchTerm(term) {
//   return Rx.Observable.fromPromise($.ajax({
//     url: 'http://en.wikipedia.org/w/api.php',
//     dataType: 'jsonp',
//     data: {
//       action: 'opensearch',
//       format: 'json',
//       search: term,
//     },
//   }).promise());
// }
// function formatResult(res) {
//   return {
//     term: res[0],
//     matches: res[1].map((title, i) => ({
//       title,
//       description: res[2][i],
//       url: res[3][i],
//     })),
//   };
// }

const vmApp = new Vue({
  el: '#app',
  store,
  router,
  // subscriptions() {
  //   return {
  //     // this is the example in RxJS's readme.
  //     results: this.$watchAsObservable('search')
  //       .pluck('newValue')
  //       .filter(text => text.length > 2)
  //       .debounceTime(500)
  //       .distinctUntilChanged()
  //       .switchMap(fetchTerm)
  //       .map(formatResult),
  //   };
  // },
  render: h => h(App),
});
// .$mount('#app');

const vmLogin = new Vue({
  el: '#loginApp',
  store,
  render: h => h(Home),
});


