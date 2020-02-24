import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import VueGoogleCharts from 'vue-google-charts'
import vuetify from './plugins/vuetify';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import VueNativeSock from 'vue-native-websocket'
import store from './store'
import axios from "axios";
import zingchartVue from 'zingchart-vue';
import VueRouter from 'vue-router'
import router from '@/router';

Vue.use(VueRouter)

Vue.component('zingchart', zingchartVue);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueGoogleCharts);

axios.defaults.baseURL = "https://api-demo.wolkabout.com/";
if(sessionStorage.getItem('token')) axios.defaults.headers.common['Authorization'] = "Bearer "+sessionStorage.getItem('token');

Vue.prototype.$refreshInterval = 5000;

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
