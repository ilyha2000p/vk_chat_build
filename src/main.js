import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'

import MainContainer from './components/MainContainer.vue'
import EnterButton from './components/EnterButton.vue'
import Entrance from './components/Entrance.vue'

const routes = [
  {path: '/', component: EnterButton},
  {path: '/chat', component: MainContainer},
  {path: '/enter', component: Entrance}
]

const router = new VueRouter({
	routes
})
var app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});