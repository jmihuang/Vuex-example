<template>
  <div id="app">
  <div class="wrapper clearfix">
    <Aside/>
    <div class="content">
      <router-view/>
    </div>
  </div>
  <footer>@2018 vue.js</footer>
  </div>

</template>

<script>
import Aside from '@/components/Aside'
export default {
  name: 'App',
  components:{
    Aside,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}




</style>
