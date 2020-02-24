<template>
    <v-card style="width: 400px; height: 250px" class="d-inline-block mx-auto">
        <v-container>
            <v-row justify="center" style="margin-top: 10px">
                <div v-if="label" class="title text-center">
                    {{label}}
                </div>
            </v-row>
            <v-row justify="center">
                <v-col cols="auto">
                    <v-iot-bargraph
                            class="d-inline-flex"
                            style="width: 200px; height:150px"
                            v-model="value"
                            :min="min"
                            :max="max"
                            :device-id="deviceId"
                            :sensor-id="sensorId"
                            :actuator-id="actuatorId" />
                </v-col>
                <v-col cols="auto"
                       class="text-center"
                        style="margin-right: 10px; width:150px">
                    <v-row
                            class="flex-column ma-0 fill-height"
                            justify="center"
                    >
                        <v-iot-value-label class="display-1" :device-id="deviceId" :sensor-id="sensorId" :actuator-id="actuatorId" />
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
    import VIotBargraph from "@/components/basic-components/viot-bargraph";
    import VIotValueLabel from "@/components/basic-components/viot-value-label";
    export default {
        name: "VIotWidgetBargraph",
        components: {VIotValueLabel, VIotBargraph},
        props:{
            min: Number,
            max: Number,
            value: {type: Number, default:0},
            label: String,
            deviceId: Number,
            sensorId: Number,
            actuatorId: Number,
        },
    }
</script>

<style scoped>

</style>