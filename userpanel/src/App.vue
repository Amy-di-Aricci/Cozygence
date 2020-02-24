<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data(){
    return {
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
            sessionStorage.setItem('token', this.authToken);
            location.reload();
          }
        }
        catch (e) {

        }
    },
  },
  mounted(){
    if(!sessionStorage.getItem('token'))
      this.login();
  }
};
</script>
