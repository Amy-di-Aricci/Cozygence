<template>
    <div>
        <v-switch
                inset
                v-model="val"
                @change="stateChanged">
        </v-switch>
        <v-snackbar
                v-model="snackbar"
                :timeout="3000"
        >
            {{ text }}
            <v-btn
                    color="blue"
                    text
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "VIotSwitch",
        props:{
            deviceId: Number,
            actuatorId: Number,
            value: {type: Boolean, default: false},
        },
        data(){
            return{
                val: this.value,
                snackbar: false,
                text: "",
            }
        },
        methods:{
            async stateChanged(){
                this.snackbar = false;
                if(sessionStorage.getItem('token') && this.deviceId!=null && this.actuatorId!=null)
                try{
                    this.response = await axios.post('/api/points/'+this.deviceId+'/actuators/'+this.actuatorId+'/actuate',this.val, {headers:{'content-type':'text/plain'}});
                    if(this.response.status === 200){
                        this.text = "State changed successfully.";
                        this.snackbar = true;
                    }
                }
                catch (e) {
                    this.text = "Error: cannot change state.";
                    this.snackbar = true;
                }
            },
            async getState(){
                    try{
                        this.response = await axios.get('/api/points/'+this.deviceId+'/actuators/'+this.actuatorId);
                        if (this.response.status === 200){
                            this.val = JSON.parse(this.response.data.value);
                        }
                    }
                    catch (e) {

                    }
                    setTimeout(this.getState, this.$refreshInterval)
                }
        },
        async mounted(){
            if(sessionStorage.getItem('token') && this.deviceId!=null && this.actuatorId!=null)
                this.getState();
        }
    }
</script>

<style scoped>

</style>