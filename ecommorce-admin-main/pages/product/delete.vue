<template>
    <b-card class="card-submit" bg-variant="light">
        <b-row>
            <b-col cols="12" md="4">
                <h5>Product Delete</h5>
            </b-col>
            <b-col cols="12" md="8">
                <b-form-group>
                    <b-form-input v-model="productID" placeholder="Product ID"></b-form-input>
                    <b-button variant="dark" class="mt-5" block  @click="delProduct">Delete</b-button>          
                </b-form-group>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            productID:null
        }
    },
    methods: {
        ...mapActions(['deleteProduct']),
        delProduct(){
           this.deleteProduct(this.productID)
        },
    },
}
</script>

<style>

</style>