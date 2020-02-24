<template>
    <v-card style="width: 250px; height: 250px" class="d-inline-block mx-auto">
        <v-container>
            <v-row justify="center" style="margin-top: 10px; margin-bottom: 10px">
                <div v-if="label" class="title text-center">
                    {{label}}
                </div>
            </v-row>
            <v-row justify="center" no-gutters dense>
                <v-col cols="auto" style="width: 90%">
                    <v-row justify="center" class="mx-auto" no-gutters>
                        <v-iot-boolean-image
                                :device-id="deviceId"
                                :actuator-id="actuatorId"
                                v-model="value"
                                style="max-height: 100px"/>
                    </v-row>
                    <v-row justify="center" no-gutters>
                        <v-iot-switch
                                :device-id="deviceId"
                                :actuator-id="actuatorId"
                                v-model="value"/>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
    import VIotBooleanImage from "@/components/basic-components/viot-boolean-image";
    import VIotSwitch from "@/components/basic-components/viot-switch";
    export default {
        name: "VIotWidgetSwitch",
        components: {VIotSwitch, VIotBooleanImage},
        props:{
            value: {type: Boolean, default:false},
            label: String,
            deviceId: Number,
            actuatorId: Number,
        },
    }
</script>

<style scoped>

</style>