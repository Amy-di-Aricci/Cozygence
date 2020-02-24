<template>
    <div>
        <v-text-field
                v-model="msg"
                :clearable="changed"
                ref="field"
                :rules="validationRules"
                @input="onChange"
                @click:clear="resetValue">
            <template v-slot:append-outer>
                <v-icon v-if="valid" @click="sendMsg">mdi-send</v-icon>
            </template>
        </v-text-field>
        <v-snackbar
                v-model="snackbar"
                :timeout="3000"
        >
            {{ text }}
            <v-btn
                    color="blue"
                    text
                    @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "VIotTextfield",
        props:{
            deviceId: Number,
            actuatorId: Number,
            value: {type: [String, Number, Boolean], default: ""},
            min: Number,
            max: Number,
        },
        data(){
            return{
                msg: this.value,
                changed: false,
                minimum: this.min,
                maximum: this.max,
                valid: false,
                validationRules: [],
                rules:{
                    min: value => value>=this.minimum || 'Value must be equal or greater than '+this.minimum,
                    max: value => value<=this.maximum || 'Value must be equal or smaller than '+this.maximum,
                    bool: value => (value==="true" || value==="false" || value==="1" || value ==="0") || 'Value must be of BOOLEAN type',
                },
                snackbar: false,
                text: "",
            }
        },
        methods:{
            async sendMsg(){
                this.snackbar = false;
                if(sessionStorage.getItem('token') && this.deviceId!=null && this.actuatorId!=null && this.valid)
                    try{
                        this.response = await axios.post('/api/points/'+this.deviceId+'/actuators/'+this.actuatorId+'/actuate',this.msg, {headers:{'content-type':'text/plain'}});
                        if(this.response.status === 200){
                            this.resetValue();
                            this.text = "State changed successfully.";
                            this.snackbar = true;
                        }
                    }
                    catch (e) {
                        this.text = "Error: cannot change state.";
                        this.snackbar = true;
                    }
            },
            onChange(){
                this.valid = this.$refs.field.validate();
                this.changed = true;
            },
            resetValue(){
              this.changed = false;
              this.getValue();
            },
            async getValue(){
                if(!this.changed)
                try{
                    this.response = await axios.get('/api/points/'+this.deviceId+'/actuators/'+this.actuatorId);
                    if (this.response.status === 200){
                        this.msg = JSON.parse(this.response.data.value);
                        if(this.response.data.readingType.dataType === "NUMERIC"){
                            this.minimum = JSON.parse(this.response.data.minimum);
                            this.maximum = JSON.parse(this.response.data.maximum);
                            this.validationRules = [this.rules.min, this.rules.max];
                        }
                        else if(this.response.data.readingType.dataType === "BOOLEAN"){
                            this.validationRules = [this.rules.bool];
                        }
                        this.changed = false;
                        this.valid = true;
                    }
                }
                catch (e) {

                }
                if(!this.changed)setTimeout(this.getValue, this.$refreshInterval)
            }
        },
        async mounted(){
            if(sessionStorage.getItem('token') && this.deviceId!=null && this.actuatorId!=null)
                this.getValue();
            else if(this.min && this.max){
                this.validationRules = [this.rules.min, this.rules.max];
            }
        }
    }
</script>

<style scoped>

</style>