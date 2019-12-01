import Vue from 'vue'
import App from './App.vue'

import VueGoogleCharts from 'vue-google-charts'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(VueGoogleCharts);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
