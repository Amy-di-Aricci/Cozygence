<template>
    <v-avatar :size="size">
        <v-icon dark :size="size*0.5" :class=iconColor>{{icon}}</v-icon>
    </v-avatar>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "VIotDeviceStatusIcon",
        props:{
            value: {type: String, default:""},
            customStyle: {type: Object, default() {
                return{
                    color: 'grey lighten-1',
                    icon: '',
                }
            }},
            deviceId: Number,
            size: {type: Number, default:128}
        },
        data(){
            return{
                icon: this.customStyle.icon,
                iconColor: this.customStyle.color,
                state: this.value,
            }
        },
        methods: {
            async getStatus(){
                try{
                    this.response = await axios.get('/api/points/'+this.deviceId);
                    if (this.response.status === 200){
                        this.state = this.response.data.status.toLowerCase();
                        this.setStyle();
                    }
                }
                catch (e) {
                    this.state="disconnected";
                    this.setStyle();
                }
                setTimeout(this.getStatus, this.$refreshInterval);
            },
            setStyle(){
                switch (this.state) {
                    case "normal":
                        this.iconColor = "green accent-4";
                        this.icon = "mdi-check";
                        break;
                    case "warning":
                        this.iconColor = "amber accent-4";
                        this.icon = "mdi-alert-circle";
                        break;
                    case "alarm":
                        this.iconColor = "red accent-4";
                        this.icon = "mdi-alert";
                        break;
                    case "disconnected":
                        this.iconColor = "grey lighten-1";
                        this.icon = 'mdi-cloud-off-outline';
                        break;
                    default:
                        if(this.customStyle != null){
                            this.iconColor = this.customStyle.color;
                            this.icon = this.customStyle.icon;
                        }
                }
            }

        },
        mounted() {
            if(sessionStorage.getItem('token') && this.deviceId!=null)
                this.getStatus();
            else if(this.value){
                this.setStyle();
            }
        }
    }
</script>

<style scoped>

</style>