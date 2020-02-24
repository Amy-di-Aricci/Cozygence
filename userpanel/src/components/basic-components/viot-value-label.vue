<template>
    <div>
        {{text}}
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "VIotValueLabel",
        props:{
            deviceId: Number,
            actuatorId: Number,
            sensorId: Number,
            value: {type: String, default: ""},
        },
        data(){
            return{
                text: this.value,
            }
        },
        methods:{
            async readSensor(){
                try{
                    this.response = await axios.get(this.url);
                    if (this.response.status===200){
                        let val = this.response.data.value;
                        let unit = "";
                        if(this.response.data.unit.symbol && this.response.data.unit.symbol !== "count")
                            unit = this.response.data.unit.symbol;
                        this.text = val+" "+unit;
                    }
                }
                catch (e) {

                }
                setTimeout(this.readSensor, this.$refreshInterval)
            },
        },
        async mounted(){
            if(this.deviceId && this.sensorId)
                this.url = 'api/points/'+this.deviceId+'/feeds/'+this.sensorId;
            else if(this.deviceId && this.actuatorId)
                this.url = 'api/points/'+this.deviceId+'/actuators/'+this.actuatorId;

            if(sessionStorage.getItem('token') && this.url)
                this.readSensor();
        },
    }
</script>

<style scoped>

</style>