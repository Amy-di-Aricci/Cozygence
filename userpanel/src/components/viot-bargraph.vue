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
            value: {type: Number},
            variableName: String,
            deviceId: Number,
            sensorId: Number,
        },
        data () {
            return {
                val: 0,
                // Array will be automatically processed with visualization.arrayToDataTable function
                chartData: [],
                chartOptions: {
                    axisTitlesPosition: "none",
                    labels: "none",
                    vAxis: {maxValue: this.max, minValue: this.min, baseline: this.min},
                    hAxis: {textPosition: "none"},
                    legend: {position: "none"},
                },
                subscriptionParameters:{
                    eventType: "State changed",
                    messageType: "INFO",
                }
            }
        },
        methods:{

            async getDevice(){
                try{
                    this.response = await axios.get('/api/devices/'+'m18jxpygquntb7di');
                }
                catch (e) {
                    
                }
            },
            async readSensor(){
                try{
                    this.response = await axios.get('api/devices/'+this.deviceId+'/sensors/'+this.sensorId);
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
            if(localStorage.getItem('token'))
            this.readSensor();

        },
        socket:{
            events:{

            }
        },
    }
</script>

<style scoped>

</style>