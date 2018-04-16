<template>
  <div class="hello">
       {{msg}}
  <router-view/>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

}
</script>

