<template>
    <b-card class="card-submit" bg-variant="light">
        <b-row>
            <b-col cols="12" md="4">
                <h5>Product Create</h5>
            </b-col>
            <b-col cols="12" md="8">
                <product-form type="Create" @sendProduct="postProduct($event)"/>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ProductForm from '../../components/ProductForm.vue'
export default {
    components: {
        ProductForm
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['categories']),
    },
    methods: {
        ...mapActions(['createProduct']),
        postProduct(item){
            this.createProduct(item)
        }
    }
}
</script>

<style>

</style>