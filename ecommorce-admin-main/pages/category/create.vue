<template>
    <div>
        <b-card class="card-submit" bg-variant="light">
            <b-row>
                <b-col cols="12" md="4">
                    <h5>Main Category Create</h5>
                </b-col>
                <b-col cols="12" md="8">
                    <b-form-group>
                        <b-form-input v-model="catagoryName" placeholder="Title" />
                        <b-button variant="dark" class="mt-5" block @click="createMainCategoryItem">Create</b-button>  
                    </b-form-group>
                </b-col>
            </b-row>
        </b-card>  
        
        <b-card class="card-submit" bg-variant="light">
            <b-row>
                <b-col cols="12" md="4">
                    <h5>Sub Category Create</h5>
                </b-col>
                <b-col cols="12" md="8">
                    <b-form-group>          
                        <b-form-select 
                            placeholder="Select Main Category" 
                            v-model="selectedMainCategory" 
                            :options="categories" 
                            value-field="index"
                            text-field="title"
                            class="mt-2" />
                            
                        <b-list-group class="mt-4 ml-4 mr-4">
                            <b-list-group-item v-for="(el,i) in getSubCategoryList" :key="el + i">
                                ⦿    {{'  '+ el }}
                            </b-list-group-item>
                        </b-list-group>  
                            
                        <b-form-input class="mt-3" placeholder="Sub Category Title" v-model="subcatagoryName" />    
                        <b-button variant="dark" class="mt-5" block @click="createSubCategoryItem">Create</b-button>      
                    </b-form-group>
                </b-col>
            </b-row>
        </b-card>  
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            catagoryName: null,
            subcatagoryName: null,
            selectedMainCategory: null,
        }
    },
    methods: {
        ...mapActions(['createMainCategory', 'createSubCategory', 'getCategories']),
        createMainCategoryItem() {    
            this.createMainCategory({ title: this.catagoryName })
                .then(() => {
                    this.getCategories()
                    console.log(this.categories);
                })
        },
        createSubCategoryItem() {  
            this.createSubCategory({ mainCategoryID: this.categories[this.selectedMainCategory]._id, subCategory:this.subcatagoryName })
                 .then(() => {
                    this.getCategories()
                    console.log(this.categories);
                })
        },
    },
 computed: {
    ...mapState(['categories']),
    getSubCategoryList() {
        if (this.selectedMainCategory !== null) {
            return this.categories[this.selectedMainCategory].subCategory
        } else {
            return []
        }
    }
 }
}
</script>

<style scoped>

</style>