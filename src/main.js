import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router";
import router from './router'
import './assets/css/global.css'
import axios from 'axios'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.prototype.$axios = axios;
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
