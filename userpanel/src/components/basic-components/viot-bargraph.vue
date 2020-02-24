<template>
    <GChart
            type="ColumnChart"
            :data="chartData"
            :options="chartOptions"
    />
</template>

<script>
    import axios from "axios";
    export default {
        name: "VIotBargraph",
        props:{
            min: Number,
            max: Number,
            value: {type: Number, default:0},
            deviceId: Number,
            sensorId: Number,
            actuatorId: Number,
        },
        data () {
            return {
                val: 0,
                url: null,
                chartData: [['Name', 'Value'],
                            ['Temperature', this.value]],
                chartOptions: {
                    axisTitlesPosition: "none",
                    labels: "none",
                    vAxis: {maxValue: this.max, minValue: this.min, baseline: this.min},
                    hAxis: {textPosition: "none"},
                    legend: {position: "none"},
                    chartArea: {width: '80%', height: '90%'},
                },
            }
        },
        methods:{
            async readSensor(){
                try{
                    this.response = await axios.get(this.url);
                    if (this.response.status===200){
                        this.val = JSON.parse(this.response.data.value);
                        this.chartOptions.vAxis.minValue = this.chartOptions.vAxis.baseline = JSON.parse(this.response.data.minimum);
                        this.chartOptions.vAxis.maxValue = JSON.parse(this.response.data.maximum);
                        this.chartData = [
                            ['Name', 'Value'],
                            ['Temperature', this.val]
                        ];
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