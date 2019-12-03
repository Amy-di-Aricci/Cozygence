import Vue from 'vue'
import App from './App.vue'
import VueGoogleCharts from 'vue-google-charts'
import vuetify from './plugins/vuetify';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueNativeSock from 'vue-native-websocket'
import store from './store'

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueNativeSock, 'wss://HubSajgony.azure-devices.net:443/$iothub/websocket', { store: store , protocol: 'amqp'});

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(VueGoogleCharts);

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
