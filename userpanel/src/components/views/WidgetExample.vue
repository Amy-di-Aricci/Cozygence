<template>
    <v-container>
        <v-row justify="start">
            <v-col cols="auto">
                <v-iot-widget-bargraph :device-id="3077" :sensor-id="7740" label="Temperatura"/>
            </v-col>
            <v-col cols="auto">
                <v-iot-widget-gauge :device-id="3077" :sensor-id="7741" label="Wilgotność"/>
            </v-col>
            <v-col cols="auto">
                <v-iot-widget-slider :device-id="3077" :actuator-id="2893" label="Slider"/>
            </v-col>
            <v-col cols="auto">
                <v-iot-widget-switch :device-id="3077" :actuator-id="2892" label="Switch"/>
            </v-col>
            <v-col cols="auto">
                <v-iot-widget-gauge :device-id="3077" :sensor-id="7742" label="Ciśnienie"/>
            </v-col>
            <v-col>
                <v-iot-widget-device-status :device-id="3077" label="Status"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import VIotBargraph from "@/components/basic-components/viot-bargraph";
    import VIotDeviceStatusIcon from "@/components/basic-components/viot-device-status-icon";
    import axios from "axios";
    import VIotSwitch from "@/components/basic-components/viot-switch";
    import VIotGauge from "@/components/basic-components/viot-gauge";
    import VIotSlider from "@/components/basic-components/viot-slider";
    import VIotTextfield from "@/components/basic-components/viot-textfield";
    import VIotValueLabel from "@/components/basic-components/viot-value-label";
    import VIotWidgetBargraph from "@/components/widgets/viot-widget-bargraph";
    import VIotWidgetGauge from "@/components/widgets/viot-widget-gauge";
    import VIotWidgetSlider from "@/components/widgets/viot-widget-slider";
    import VIotBooleanImage from "@/components/basic-components/viot-boolean-image";
    import VIotWidgetSwitch from "@/components/widgets/viot-widget-switch";
    import VIotWidgetDeviceStatus from "@/components/widgets/viot-widget-device-status";
    export default {
        name: "WidgetExample",
        components: {
            VIotWidgetDeviceStatus,
            VIotWidgetSwitch,
            VIotBooleanImage,
            VIotWidgetSlider,
            VIotWidgetGauge,
            VIotWidgetBargraph,
            VIotValueLabel,
            VIotTextfield,
            VIotSlider,
            VIotGauge,
            VIotSwitch,
            VIotBargraph,
            VIotDeviceStatusIcon,
        },
    }
</script>

<style scoped>

</style>