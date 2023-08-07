<template>
    <b-form-group>
        <b-form-input class="mt-3 mb-3" v-model="item.title" placeholder="Title" />
        <b-form-input class="mt-3 mb-3" v-model="item.price" placeholder="Price" />
        <b-form-input class="mt-3 mb-3" v-model="item.stockNumber" placeholder="Stock Number" />
        <b-form-input class="mt-3 mb-3" v-model="item.summary" placeholder="Stock Number" />
        <b-form-tags class="mt-3 mb-3" v-model="item.features" placeholder="Add Decriciption" />
        <b-form-tags class="mt-3 mb-3" v-model="item.description" placeholder="Add Decriciption" />
        <b-form-tags class="mt-3 mb-2" v-model="item.photo" placeholder="Add Photo Link" />
        <b-form-select  class="mt-2 mb-2" value-field="title" text-field="title" v-model="item.mainCategory" :options="categories" />
        <b-form-select class="mt-2 mb-2" v-model="item.subCategory" :options="subcategoryList(item.mainCategory)" />
        <b-button class="mt-2 mb-2" variant="dark" block :disabled="!allValueValid" @click="sendProduct">{{ type }}</b-button>
    </b-form-group>

</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    props: {
        type: {
            type: String,
            default: 'Create'
        },
        itemValue: {
            type: Object
        }  
    },
    data() {
        return {
            item: {
                title:null,
                price:null,
                summary: null,
                features:null,
                stockNumber:null,
                description:null,
                photo:null,
                mainCategory:null,
                subCategory:null,
            }

        }
    },
    mounted() {
        switch (this.type) {
            case 'Update':
                this.item = this.itemValue
                break;
        
            default:
                break;
        }
    },
    computed: {
        ...mapState(['categories']),
        ...mapGetters(['subcategoryList']),
        allValueValid(){
            if(
                this.item.title && 
                this.item.price && 
                this.item.stockNumber && 
                this.item.description && 
                this.item.photo && 
                this.item.mainCategory && 
                this.item.subCategory){
                return true
            }else{
                return false
            }
        }
    },
    methods: {
        sendProduct() {
            this.$emit('sendProduct', this.item)
        }
    }
}
</script>

<style>

</style>