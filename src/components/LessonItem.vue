<template>
    <li class="lessonlist" >
        <div class="item">
            <img :src="lesson.cover" width="100">
            <h2>{{lesson.title}}</h2>
            <span class="float-right currency">${{lesson.price}}</span>
            <span>{{teachers}}</span>
            <input type="button" class = "white-text add-cart" 
                @click = "addToCart(lesson)"
                :disabled = "!isLessonInCart"
                value="加入購物車"
            >   
        </div>  
    </li>
</template>

<script>
import { mapState , mapGetters, mapActions , mapMutations } from 'vuex';

export default {
  props: ['lesson'],
  computed:{  
       teachers(){
          return this.lesson.teachers
            .map( t => t.username)
            .join(', ');
       },
      ...mapGetters(['isLessonInCart'])
  },
  methods:{  
      ...mapMutations(['addToCart']),
  }
}
</script>

