import Vue from 'vue';

// npm install --save vue-router
import VueRouter from 'vue-router'; // importing vue-router

import App from './App.vue';
import Home from './Home.vue';
import Users from './Users.vue';


Vue.use(VueRouter); 


const myRoutes = [
	{ path: '/', component: Home },
	{ path: '/users/:teamId', component: Users }
	// adding dynamic id for users (semicolon symbol means its dynamic)
];


const myRouter = new VueRouter({
	routes: myRoutes,
	mode: 'history'
});



new Vue({
  el: '#app',
  
  router: myRouter,

  render: h => h(App)
});
