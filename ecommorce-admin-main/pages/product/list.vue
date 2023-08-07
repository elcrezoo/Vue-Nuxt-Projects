<template>
    <div>
        <b-card-group v-if="productList" class="m-5" columns deck>
            <product-card 
                    v-for="(item,i) in productList.result" 
                    :key="i"
                    :item="item"
            />
        </b-card-group>  
        <b-row class="ml-5">
            <b-col>
                <b-pagination-nav v-model="pageNum" :link-gen="linkGen" :number-of-pages="productList.totalPageNumber" use-router></b-pagination-nav>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ProductCard from "~/components/ProductCard.vue"
export default {
    components: {
        ProductCard
    },
	data() {
		return {
			pageNum: 1
		}
	},
	computed: {
		...mapState(['productList'])
	},
    methods: {
      ...mapActions(['getProductAll']),
	  linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    },
    mounted() {
      this.getProductAll(0)
    },
	watch: {
		pageNum() {
			this.getProductAll(this.pageNum - 1)
		}
	}
}
</script>

<style>

</style>