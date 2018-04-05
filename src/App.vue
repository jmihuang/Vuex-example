<template>
  <div id="app">
  <div class="wrapper clearfix">
  <aside class="aside">
    <ul>
      <li><a href="#">Shopping-Cart</a></li>
    </ul>
  </aside>
  <div class="content">
    <router-view/>
    </div>
    </div>
    <footer>@2018 vue.js</footer>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}




</style>
