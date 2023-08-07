<template>
    <div>
        <b-card class="card-submit" bg-variant="light">
            <b-row>
                <b-col cols="12" md="4">
                    <h5>Get Product From ID</h5>
                </b-col>
                <b-col cols="12" md="8">
                    <b-form-group>
                        <b-form-input v-model="productID" placeholder="Product ID" />
                        <b-button variant="dark" class="mt-5" block  @click="getProductOne">Get Product</b-button>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-card>
        <b-card v-if="product" class="card-submit" bg-variant="light">
            <b-row>
                <b-col cols="12" md="4">
                    <h5>Update Product Info</h5>
                </b-col>
                <b-col cols="12" md="8">
                    <product-form type="Update" :itemValue="item" @sendProduct="putProduct($event)"/>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import ProductForm from '../../components/ProductForm.vue'
export default {
    components: {
        ProductForm
    },
    data() {
        return {
            productID:null,
            item: {
                title:null,
                price:null,
                stockNumber:null,
                description:null,
                photo:null,
                mainCategory:null,
                subCategory:null,
            }
        }
    },
    created() {
        if(this.product?._id) {
            this.productID = this.product._id
            this.item = this.product
        }
    },
    computed: {
        ...mapState(['product', 'categories']),
        ...mapGetters(['subcategoryList']),
    },
    methods: {
        ...mapActions(['getProduct', 'updateProduct']),
        getProductOne(){
            this.getProduct(this.productID)
        },
        putProduct(item){
            this.updateProduct({
                productID: this.productID,
                updatedProduct: item
            })
        }
    },
    watch: {
        product: {
            deep: true,
            handler(val) {
                this.item = { ...this.items, ...val}
            }
        }
    }
}
</script>

<style>

</style>