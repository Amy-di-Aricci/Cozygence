<template>
    <v-card style="width: 250px; height: 250px" class="d-inline-block mx-auto">
        <v-container>
            <v-row justify="center" style="margin-top: 10px; margin-bottom: 10px">
                <div v-if="label" class="title text-center">
                    {{label}}
                </div>
            </v-row>
            <v-row justify="center" class="fill-height">
                <v-col cols="auto" class="d-inline-block mx-auto" align-content="end" style="width: 90%">
                    <v-row justify="center" class="text-center mx-auto" style="width: 50%">
                        <v-iot-textfield
                                v-model="value"
                                :min="min"
                                :max="max"
                                :device-id="deviceId"
                                :actuator-id="actuatorId"/>
                    </v-row>
                    <v-spacer style="height: 10px"/>
                    <v-row>
                            <v-iot-slider
                                    style="width: 100%"
                                    v-model="value"
                                    :min="min"
                                    :max="max"
                                    :device-id="deviceId"
                                    :actuator-id="actuatorId" />
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
    import VIotSlider from "@/components/basic-components/viot-slider";
    import VIotValueLabel from "@/components/basic-components/viot-value-label";
    import VIotTextfield from "@/components/basic-components/viot-textfield";
    export default {
        name: "VIotWidgetSlider",
        components: {VIotTextfield, VIotValueLabel, VIotSlider},
        props:{
            min: Number,
            max: Number,
            value: {type: Number, default:0},
            label: String,
            deviceId: Number,
            actuatorId: Number,
        },
    }
</script>

<style scoped>

</style>