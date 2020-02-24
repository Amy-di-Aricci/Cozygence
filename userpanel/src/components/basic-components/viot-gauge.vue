<template>
        <zingchart
                height="110%"
                width="100%"
                style="margin-top: -15px"
                v-if="loaded" id="gauge"
                :data="dataset"
                :key="dataset.series[0].values[0]"
        />
</template>

<script>
    import axios from 'axios';
    export default {
        name: "VIotGauge",
        props:{
            min: {type: Number, default:0},
            max: {type: Number, default:100},
            value: {type: Number, default:0},
            deviceId: Number,
            sensorId: Number,
            actuatorId: Number,
        },
        data () {
            return {
                loaded: false,
                val: this.value,
                url: null,
                dataset: {
                    id: 'gauge',
                    type: 'gauge',
                    series: [{
                        values: [this.value]
                    }],
                    scaleR: {
                        aperture: 230,
                        minValue: this.min,
                        maxValue: this.max,
                        step: 20,
                        center:{
                            size: 5
                        }
                    },
                    autoResize: true,
                }
            }
        },
        methods:{
            async readSensor(){
                try{
                    this.response = await axios.get(this.url);
                    if (this.response.status===200){
                        this.loaded = false;
                        this.val = JSON.parse(this.response.data.value);
                        this.$set(this.dataset.series[0], 'values', [this.val]);
                        this.dataset.scaleR.minValue = JSON.parse(this.response.data.minimum);
                        this.dataset.scaleR.maxValue = JSON.parse(this.response.data.maximum);
                        this.loaded = true;
                        this.forceRender += 1;
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
            else {
                this.loaded = true;
            }
        },
    }
</script>

<style scoped>

</style>