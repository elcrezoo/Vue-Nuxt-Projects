<template>
    <div class="cardContainer">
        <car-card :item="item" class="carCardClass" v-for="i in 12" :key="i"/>
    </div>
</template>

<script>
    import CarCard from "../components/CarCard"
    export default {
        components:{
            CarCard
        },
        props:{
            userData:Array
        },
        data(){
            return{
                item:['Reanult Clio 1.2', 'About car About car About car About car About car About car About car ....',130]
            }
        },
    }
</script>

<style>
    .cardContainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .carCardClass{
        margin: 10px;
    }
</style>