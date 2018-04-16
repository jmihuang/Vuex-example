<template>
  <div> 
   <h1>Shopping Cart Example</h1>
   <CartInfo/>
   <LessonList/>
  </div>
</template>

<script>
import LessonList from '@/components/LessonList';
import CartInfo from '@/components/CartInfo';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    LessonList,
    CartInfo,
  }
}
</script>

