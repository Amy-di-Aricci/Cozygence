<template>
    <GChart
            type="ColumnChart"
            :data="chartData"
            :options="chartOptions"
    />
</template>

<script>
    export default {
        name: "IoteBargraph",
        props:{
            minValue: Number,
            maxValue: Number,
            value: {type: Number, default: 0},
            variableName: String,
        },
        data () {
            return {
                // Array will be automatically processed with visualization.arrayToDataTable function
                chartData: [
                    ['Name', 'Value'],
                    ['Temperature', this.value]
                ],
                chartOptions: {
                    axisTitlesPosition: "none",
                    labels: "none",
                    vAxis: {maxValue: this.maxValue, minValue: this.minValue, baseline: this.minValue},
                    hAxis: {textPosition: "none"},
                    legend: {position: "none"},
                }
            }
        }
    }
</script>

<style scoped>

</style>