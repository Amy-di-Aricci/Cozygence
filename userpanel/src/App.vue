<template>
  <v-app>
    <v-container fluid>
      <div style="width: 200px">
        <v-iot-bargraph :device-id="7802" :sensor-id="6270" />
      </div>

      <v-iot-icon-indicator :custom="indicatorcustom"></v-iot-icon-indicator>
      <v-iot-switch :device-id="7806" :actuator-id="1756"></v-iot-switch>
    </v-container>
  </v-app>
</template>

<script>

import VIotBargraph from "@/components/viot-bargraph";
import VIotIconIndicator from "@/components/viot-icon-indicator";
import {WolkREST} from "@wolkabout/wolk-rest"
import axios from "axios";
import VIotSwitch from "@/components/viot-switch";

export default {
  name: 'App',

  components: {
    VIotSwitch,
    VIotBargraph,
    VIotIconIndicator,
  },

  data(){
    return {
      indicatorcustom: {
        color: 'blue',
        icon: 'mdi-dna'
      },
      api: {},
      user:{
        username: "e.brudzisz@gmail.com",
        password: "Inzynierk4",
      },
      authToken: ""
    }
  },
  computed:{
  },
  methods:{
    async login(){
        try{
          this.response = await axios.post('/api/emailSignIn', this.user);
          if(this.response.status === 200){
            this.authToken = this.response.data.accessList[0].accessToken;
            localStorage.setItem('token', this.authToken);
          }
        }
        catch (e) {
          // eslint-disable-next-line no-console
          console.log(e)
        }
    },
    async getDeviceGroups(){
      try{
        this.response = await axios.get('/api/deviceManifests');
        if(this.response.status === 200){
          console.log(this.response.data);
        }
      }
      catch (e) {

      }
    },
    async getDevice(){
      try{
        this.response = await axios.get('/api/devices/'+'m18jxpygquntb7di');
      }
      catch (e) {

      }
    },
  },
  mounted(){
    this.api = new WolkREST('https://api-demo.wolkabout.com');
    if(!localStorage.getItem('token'))
      this.login();
    else{
      this.getDeviceGroups();
    }
  }
};
</script>
