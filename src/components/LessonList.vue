<template>
  <div>
    <ul class="flex">
        <LessonItem v-for="lesson in lessons" :key="lesson.id" :lesson="lesson"/>   
    </ul>  
  </div>
</template>

<script>
import { mapState , mapGetters, mapActions , mapMutations } from 'vuex';
import LessonItem from '@/components/LessonItem';
export default {
  components:{
      LessonItem,
  },
  computed:{  
      lessons(){
          return this.lessonDate.courses;
      },
      ...mapState({
         lessonDate: state => state.cart.lessons
      })
  },
  methods:{
      ...mapActions(['productApi'])
  },
  mounted(){
      this.productApi();
  }
}
</script>

