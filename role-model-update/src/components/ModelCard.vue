<template>
    <b-card
            :title="modelName"
            :img-src="modelPic"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
    >
        <b-card-text>
            {{modelJob}} - {{modelNationality}} -{{modelBirthDay}}
        </b-card-text>
        <b-card-text>
            {{modelAbout}}
        </b-card-text>
        <div class="tagsClass">
            <b-card-text class="tagsText" v-for="(i,index) in tags" :key="index">
                #{{i}}
            </b-card-text>
        </div>
        <div class="bottomButtons">
            <b-button @click="updateEmitIndex()" variant="outline-success">Update</b-button>
            <b-button @click="deleteModelOpen()" variant="outline-danger">Delete</b-button>
        </div>
    </b-card>
</template>

<script>
    export default {
        props:{ //[this.modelName,this.modelJob,this.modelNationality,this.modelBirthDay,this.modelAbout,this.modelPic,this.tags];
            modelName:String,
            modelJob:String,
            modelNationality:String,
            modelBirthDay:String,
            modelAbout:String,
            modelPic:String,
            tags:Array,
            index:Number
        },
        data(){
            return{

            }
        },
        methods:{
            updateEmitIndex(){
                this.$emit('updateEmitIndex',this.index)
            },
            deleteModelOpen(){
                this.$emit('deleteModelOpen',this.index)
            }
        },

    }
</script>
<style>
    .tagsClass{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 15px;
        justify-content: center;
    }
    .tagsText{
        background-color: #d5ede8;
        margin: 4px;
        font-size: 18px;
        font-family: Calibri,sans-serif;
        padding: 2px 10px 2px 10px;
        box-shadow: 0 0 3px #0e9acd;
        border-radius: 18px;
    }
    .card-text:last-child {
        margin-bottom: 4px;
    }
    .bottomButtons{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>
