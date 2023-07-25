<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
  import globalComponent from "./components/globalComponent";
export default {
  components:{
    ...globalComponent
  }
}
</script>
<style>
#app {

}

</style>
