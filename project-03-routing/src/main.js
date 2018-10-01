import Vue from 'vue';

// npm install --save vue-router
import VueRouter from 'vue-router'; // importing vue-router

import App from './App.vue';
import Home from './Home.vue';
import Users from './Users.vue';


// Telling vue to make use of vue-router installed and imported
Vue.use(VueRouter); 


// declaring path and landing page as component, and saving all my routes to a const variable 
const myRoutes = [
	{ path: '/', component: Home},
	{ path: '/users', component: Users}
];


// newly created my routes should be assigned as new VueRouter,
// which will be mentioned in the Vue instance of our app
const myRouter = new VueRouter({
	routes: myRoutes,
	mode: 'history' // history mode is written to remove the # symbol on the url path
});



new Vue({
  el: '#app',
  
  // so, all my router routes will be appeared in this vue instance and
  // same can be achieved by <router-view> tag in App.vue file
  router: myRouter,

  render: h => h(App)
});
