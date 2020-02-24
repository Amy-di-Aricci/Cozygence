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
                        <v-iot-device-status-icon :device-id="deviceId" :status="status" :custom-style="customStyle"/>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
    import VIotDeviceStatusIcon from "@/components/basic-components/viot-device-status-icon";
    export default {
        name: "VIotWidgetDeviceStatus",
        components: {VIotDeviceStatusIcon},
        props:{
            status: {type: String, default:"disconnected"},
            customStyle: Object,
            deviceId: Number,
            label: String,
        },
    }
</script>

<style scoped>

</style>