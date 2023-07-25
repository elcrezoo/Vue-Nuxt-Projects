<template>
    <div>
        <b-modal @hidden="hideModal()" ref="my-modal" hide-footer title="Using Component Methods">
            <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Delete Role Model</b-button>
        </b-modal>
    </div>
</template>

<script>
    export default {
        props:{ //[this.modelName,this.modelJob,this.modelNationality,this.modelBirthDay,this.modelAbout,this.modelPic,this.tags];
            index:Number,
            modelName:String
        },
        methods: {
            showModal() {
                this.$refs['my-modal'].show()
            },
            hideModal() {
                this.$refs['my-modal'].hide();
                this.$emit('deleteModelHide')
            },
            toggleModal() {
                // We pass the ID of the button that we want to return focus to
                // when the modal has hidden
                this.$refs['my-modal'].toggle('#toggle-btn');
                this.$emit('deleteModel')
            }
        },
        mounted() {
            this.showModal()
        }
    }
</script>