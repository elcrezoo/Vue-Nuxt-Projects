<template>
    <b-card class="card-submit" bg-variant="light">
        <b-row>
            <b-col cols="12" md="4">
                <h5>Category Delete</h5>
            </b-col>
            <b-col cols="12" md="8">
                <b-form-group>          
                    <b-form-select 
                        value-field="title"
                        text-field="title"  
                        v-model="mainCategory" 
                        :options="categories" 
                        class="mt-2" />
                    <b-form-select             
                        v-model="subCategory" 
                        :options="subcategoryList(mainCategory)" 
                        class="mt-2" /> 
                    <b-button variant="secondary" class="mt-5" @click="deleteCategoryElement()" block>Delete</b-button>             
                </b-form-group>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
    data() {
        return {
            mainCategory: null,
            subCategory: null
        }
    },
    methods: {
        ...mapActions(['deleteCategory', 'getCategories']),
        deleteCategoryElement() {
            var _id = this.categories.find(el => el.title === this.mainCategory)._id
            
            switch (this.subCategory) {
                case null:
                    this.deleteCategory({ type: 'main', _id })
                        .then(() => {
                            this.getCategories()
                        })
                    break;            
                default:
                    this.deleteCategory({  type: 'sub', _id, subCategory: this.subCategory })
                        .then(() => {
                            this.getCategories()
                        })
                    break;
            }
            
            this.mainCategory = null
            this.subCategory = null
        }
    },
    computed: {
        ...mapState(['categories']),
        ...mapGetters(['subcategoryList']),
    }
}
</script>

<style>

</style>