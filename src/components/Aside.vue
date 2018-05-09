<template>
<div>
  <aside class="aside">
      <ul>
        <li><router-link :to="{name:'ShppingCart'}">Shopping-Cart</router-link></li>
        <li><router-link :to="{name:'Search'}">Search</router-link></li>
        <li><router-link :to="{name:'RunNumber'}">RunNumber</router-link></li>
        <li><router-link :to="{name:'FbLogin'}">FbLogin</router-link></li>
      </ul>
    </aside>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

