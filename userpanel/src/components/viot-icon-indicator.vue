<template>
    <v-avatar>
        <v-icon dense dark :class=iconColor>{{icon}}</v-icon>
    </v-avatar>
</template>

<script>
    export default {
        name: "VIotIconIndicator",
        props:{
            ok: Boolean,
            warning: Boolean,
            error: Boolean,
            disconnect: Boolean,
            custom: Object,
            variableName: String,
        },
        data(){
            return{
                icon: '',
                iconColor: "",
            }
        },
        methods: {
            setStyle(){
                if(this.ok){
                    this.iconColor = "light-green accent-4";
                    this.icon = "fas fa-check"
                }
                else if(this.warning){
                    this.iconColor = "amber accent-4";
                    this.icon = "fas fa-exclamation"
                }
                else if(this.error){
                    this.iconColor = "red accent-4";
                    this.icon = "fas fa-exclamation-triangle"
                }
                else if(this.disconnect){
                    this.iconColor = "grey lighten-1";
                    this.icon = 'fas fa-unlink';
                }
                else if(this.custom != null){
                    this.iconColor = this.custom.color;
                    this.icon = this.custom.icon;
                }
                else{
                    this.iconColor = "grey lighten-1";
                    this.icon = 'fas fa-unlink';
                }
            }

        },
        mounted() {
            this.setStyle();
        }
    }
</script>

<style scoped>

</style>