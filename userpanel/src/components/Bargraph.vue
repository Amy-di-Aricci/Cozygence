<template>
    <GChart
            type="ColumnChart"
            :data="chartData"
            :options="chartOptions"
    />
</template>

<script>
    import { GChart } from 'vue-google-charts'
    export default {
        name: "Bargraph",
        components: {
            GChart
        },
        data () {
            return {
                // Array will be automatically processed with visualization.arrayToDataTable function
                chartData: [
                    ['Name', 'Value'],
                    ['Temperature', 40]
                ],
                chartOptions: {
                        width: 500,
                        axisTitlesPosition: "none",
                        labels: "none",
                        vAxis: {maxValue: 100, minValue: 0},
                        hAxis: {textPosition: "none"},
                        legend: {position: "none"},
                }
            }
        }
    }
</script>

<style scoped>

</style>