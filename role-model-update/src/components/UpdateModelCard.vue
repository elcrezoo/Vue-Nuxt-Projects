<template>
    <div>
        <b-modal @hidden="hideModal()" ref="my-modal" hide-footer title="Using Component Methods">
            <b-form-input class="mt-2" v-model="modelName" placeholder="What is your role model name"></b-form-input>
            <b-form-input class="mt-2" v-model="modelJob" placeholder="What is his job"></b-form-input>
            <b-form-input class="mt-2" v-model="modelNationality" placeholder="What is his nationality"></b-form-input>
            <b-form-input class="mt-2" v-model="modelPic" placeholder="Add his picture link"></b-form-input>
            <label class="mt-3">Choose his birthday</label>
            <b-form-datepicker id="example-datepicker" v-model="modelBirthDay" class="mb-2"></b-form-datepicker>
            <b-form-textarea class="mt-2" v-model="modelAbout" placeholder="Notes about him ..." rows="3" max-rows="6"></b-form-textarea>
            <b-form-tags  input-id="tags-basic" v-model="tags" class="mb-2 mt-2"></b-form-tags>
            <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Update Role Model</b-button>
        </b-modal>
    </div>
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
        methods: {
            showModal() {
                this.$refs['my-modal'].show()
            },
            hideModal() {
                this.$refs['my-modal'].hide();
                this.$emit('hideUpdateModel')
            },
            toggleModal() {
                // We pass the ID of the button that we want to return focus to
                // when the modal has hidden
                const a =[this.modelName,this.modelJob,this.modelNationality,this.modelBirthDay,this.modelAbout,this.modelPic,this.tags];
                this.$refs['my-modal'].toggle('#toggle-btn');
                this.$emit('closeModel',a)
            }
        },
        mounted() {
            this.showModal()
        }
    }
</script>