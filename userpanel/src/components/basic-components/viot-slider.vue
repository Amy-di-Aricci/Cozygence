<template>
    <div>
        <v-slider
                v-model="val"
                :thumb-label="thumbLabel"
                :min="min"
                :max="max"
                :step="precision"
                @change="stateChanged">
        </v-slider>
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
    import axios from 'axios';
    export default {
        name: "VIotSlider",
        props:{
            deviceId: Number,
            actuatorId: Number,
            thumbLabel: {type: Boolean, default: true},
            value: {type: Number, default: 0},
            step: {type: Number, default: 1},
            min: {type: Number, default: 0},
            max: {type: Number, default: 100},
        },
        data(){
            return{
                val: this.value,
                minimum: this.min,
                maximum: this.max,
                precision: this.step,
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
            async getValue(){
                try{
                    this.response = await axios.get('/api/points/'+this.deviceId+'/actuators/'+this.actuatorId);
                    if (this.response.status === 200){
                        this.val = JSON.parse(this.response.data.value);
                        this.minimum = JSON.parse(this.response.data.minimum);
                        this.maximum = JSON.parse(this.response.data.maximum);
                        this.precision = JSON.parse(this.response.data.unit.precision);
                    }
                }
                catch (e) {

                }
                setTimeout(this.getValue, this.$refreshInterval)
            }
        },
        async mounted(){
            if(sessionStorage.getItem('token') && this.deviceId!=null && this.actuatorId!=null)
                this.getValue();
        }
    }
</script>

<style scoped>

</style>