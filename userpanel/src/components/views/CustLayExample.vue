<template>
    <div class="grey lighten-3 fill-height">
        <v-container class="pa-12">
            <v-row>
                <v-col cols="12">
                    <v-card shaped>
                        <v-container fluid>
                            <v-row class="pa-3">
                                <v-col md="4" class="text-center">
                                    <v-iot-bargraph v-model="barValOne"/>
                                    <p class="title">Przedpokój</p>
                                </v-col>
                                <v-col md="4" class="text-center">
                                    <v-iot-bargraph v-model="barValTwo"/>
                                    <p class="title">Kuchnia</p>
                                </v-col>
                                <v-col md="4" class="text-center">
                                    <v-iot-bargraph v-model="barValThree"/>
                                    <p class="title">Salon</p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="11" md="11" class="namecontainer">
                                    <v-btn depressed dark x-large style="min-width: 40%" class="deep-purple lighten-2">
                                        Temperatura
                                    </v-btn>
                                </v-col>
                                <v-col style="width: 64px;" class="statuscontainer">
                                    <v-iot-device-status-icon v-model="tempStatus" :size="48"/>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="mt-12">
                <v-col cols="4">
                    <v-card shaped class="pa-12 fill-height">
                        <v-container>
                            <v-row>
                                <v-col class="namecontainer">
                                    <v-btn depressed dark x-large style="min-width: 85%" class="green lighten-1">
                                        Drzwi wejściowe
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row class="mt-6 pa-0" align="end">
                                <v-col align-self="end">
                                    <v-iot-boolean-image v-model="doorVal" style="height:150px" :images="['https://image.flaticon.com/icons/png/512/59/59802.png','https://image.flaticon.com/icons/png/512/59/59807.png']"/>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col cols="8">
                    <v-card shaped>
                        <v-container>
                            <v-row class="mt-6">
                                <v-col>
                                    <v-simple-table dense class="pa-0">
                                            <tbody>
                                            <tr v-for="item in switches" :key="item.name" class="pa-0">
                                                <td style="width: 80%">{{item.name}}</td>
                                                <td style="width: 20%"><v-iot-switch v-model="item.var"/></td>
                                            </tr>
                                            </tbody>
                                    </v-simple-table>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="6" class="namecontainer">
                                    <v-btn depressed dark x-large style="min-width: 80%" class="amber lighten-1">
                                        Oświetlenie
                                    </v-btn>
                                </v-col>
                                <v-col style="width: 64px;" class="statuscontainer">
                                    <v-iot-device-status-icon v-model="switchesStatus" :size="48"/>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import VIotGauge from "../basic-components/viot-gauge";
    import VIotBargraph from "../basic-components/viot-bargraph";
    import VIotDeviceStatusIcon from "../basic-components/viot-device-status-icon";
    import VIotBooleanImage from "../basic-components/viot-boolean-image";
    import VIotSwitch from "../basic-components/viot-switch";
    export default {
        name: "CustLayExample",
        components: {VIotSwitch, VIotBooleanImage, VIotDeviceStatusIcon, VIotBargraph, VIotGauge},
        data(){
            return{
                gaugeVal: 20,
                barValOne: 20,
                barValTwo: 25,
                barValThree: 22,
                tempStatus: 'normal',
                doorVal: true,
                switchesStatus: 'warning',
                switches: [{
                    name: 'Przedpokój',
                    var: false,
                    },
                    {
                        name: 'Salon',
                        var: true,
                    },
                    {
                        name: 'Kuchnia',
                        var: false,
                    },
                    {
                        name: 'Łazienka',
                        var: false,
                    }],
            }
        }
    }
</script>

<style scoped>
    .namecontainer{
        position: absolute;
        top: -12%;
        left: 20px;
    }
    .statuscontainer{
        position: absolute;
        top: -12%;
        right: 20px;
    }
</style>