<template>
    <div>
        <TheNavbar/>
        <nuxt />
    </div>
</template>

<script>
import {  mapActions } from 'vuex'
import TheNavbar from   "../components/TheNavbar"
export default {
    components:{
        TheNavbar
    },
   created() {
        this.getCategories()
    },
    methods: {
        ...mapActions(['getCategories']),
    },
}
</script>

<style>
.card-submit {
   margin: 20px;
   border: 1px solid rgb(221, 221, 221);
   border-radius: 40px;
   padding: 20px;
}
</style>
