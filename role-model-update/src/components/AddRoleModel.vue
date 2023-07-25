<template>
    <div class="addRoleModel mt-3">
        <b-img :src="imageSource" v-bind="mainProps" rounded ></b-img>
        <b-form>
            <b-form-input class="mt-2" v-model="modelName" placeholder="What is your role model name"></b-form-input>
            <b-form-input class="mt-2" v-model="modelJob" placeholder="What is his job"></b-form-input>
            <b-form-input class="mt-2" v-model="modelNationality" placeholder="What is his nationality"></b-form-input>
            <b-form-input class="mt-2" v-model="modelPic" placeholder="Add his picture link"></b-form-input>
            <label class="mt-3">Choose his birthday</label>
            <b-form-datepicker id="example-datepicker" v-model="modelBirthDay" class="mb-2"></b-form-datepicker>
            <b-form-textarea class="mt-2" v-model="modelAbout" placeholder="Notes about him ..." rows="3" max-rows="6"></b-form-textarea>
            <b-form-tags  input-id="tags-basic" v-model="tags" class="mb-2 mt-2"></b-form-tags>
            <b-button @click="sendRoleModel()" block variant="outline-primary">Primary</b-button>
        </b-form>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                imageSource:'https://us.123rf.com/450wm/kakigori/kakigori1808/kakigori180800024/107433935-stock-vector-cute-funny-man-dad-and-kid-son-wearing-black-mustache-mask.jpg?ver=6',
                modelName:'',
                modelJob:'',
                modelNationality:'',
                modelBirthDay:'',
                modelAbout:'',
                modelPic:'',
                tags:[],
                mainProps: { width: 150, height: 150, class: 'm1' },
            }
        },
        methods:{
            sendRoleModel(){
                const a =[this.modelName,this.modelJob,this.modelNationality,this.modelBirthDay,this.modelAbout,this.modelPic,this.tags];
                this.$emit('fromAddRoleModel',a);
            }
        }
    }
</script>
<style>
    .addRoleModel{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>