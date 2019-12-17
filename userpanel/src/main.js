import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import VueGoogleCharts from 'vue-google-charts'
import vuetify from './plugins/vuetify';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import VueNativeSock from 'vue-native-websocket'
import store from './store'
import axios from "axios";

Vue.component('font-awesome-icon', FontAwesomeIcon);
//Vue.use(VueNativeSock, 'wss://HubSajgony.azure-devices.net:443/$iothub/websocket', { store: store , protocol: 'amqp'});

//Vue.use(VueNativeSock, 'ws://localhost:1880', { store: store, format: 'json', protocol:'mqtt' });

Vue.config.productionTip = false;
//Vue.config.devtools = true;

Vue.use(VueGoogleCharts);

axios.defaults.baseURL = "https://api-demo.wolkabout.com/";
if(localStorage.getItem('token')) axios.defaults.headers.common['Authorization'] = "Bearer "+localStorage.getItem('token');

Vue.prototype.$refreshInterval = 5000;

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
