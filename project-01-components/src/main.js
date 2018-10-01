import Vue from 'vue';
import App from './App.vue';

import Message from './Message.vue'; // importing complete Message.vue, giving a nme as Message


Vue.component('app-message', Message);
// one way of creating component, app-message is a custom name and all the Message goes inside it.

new Vue({
  el: '#app',
  render: h => h(App)
})
