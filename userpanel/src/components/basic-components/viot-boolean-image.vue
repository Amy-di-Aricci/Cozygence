<template>
    <v-img contain :src="image"></v-img>
</template>

<script>
    import axios from "axios";
    export default {
        name: "VIotBooleanImage",
        props:{
            deviceId: Number,
            actuatorId: Number,
            images: {type: Array, default() {return [require('@/assets/lightbulbon.svg'),require('@/assets/lightbulboff.svg')]}},
            value: {type: Boolean, default: false},
        },
        data(){
            return{
                image: require("@/assets/lightbulbon.svg"),
                val: this.value,
            }
        },
        methods:{
            async getState(){
                try{
                    this.response = await axios.get('/api/points/'+this.deviceId+'/actuators/'+this.actuatorId);
                    if (this.response.status === 200){
                        this.val = JSON.parse(this.response.data.value);
                        this.setImage();
                    }
                }
                catch (e) {

                }
                setTimeout(this.getState, this.$refreshInterval)
            },
            setImage(){
                if(this.val)
                    this.image = this.images[0];
                else if(!this.val)
                    this.image = this.images[1];
            }
        },
        async mounted(){
            if(sessionStorage.getItem('token') && this.deviceId!=null && this.actuatorId!=null)
                this.getState();
            else this.setImage();
        }
    }
</script>

<style scoped>

</style>