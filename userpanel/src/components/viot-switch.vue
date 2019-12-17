<template>
    <v-switch
            inset
            v-model="state"
            @change="stateChanged">
    </v-switch>
</template>

<script>
    import axios from "axios";
    export default {
        name: "VIotSwitch",
        props:{
            on: Boolean,
            off: Boolean,
            deviceId: Number,
            actuatorId: Number,
        },
        data(){
            return{
                state: true,
            }
        },
        methods:{
            async getActuators(){
                try{
                    this.response = await axios.get('/api/devices/'+'ldqkdkffql7jb2pf');
                    if(this.response.status===200){
                        console.log(this.response.data);
                    }
                }
                catch (e) {

                }
            },
            async stateChanged(){

            },
            async getState(){

                setTimeout(this.readSensor, this.$refreshInterval)
            }
        },
        mounted(){
            //this.getActuators();
            if(localStorage.getItem('token'))
            this.getState();
        }
    }
</script>

<style scoped>

</style>