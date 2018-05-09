<template>
  <div> 
   <h1>Search Example</h1>
    <input type="search" v-model="keyword">
    <ul v-if="result" v-html="result">
    </ul>
    <div v-else>
        <div class="title">搜尋結果</div>
            <ul class="result" id="result">
                <li>尚無搜尋資料</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState , mapGetters, mapActions , mapMutations } from 'vuex';

export default {
  data(){
      return {
          keyword:'',
          result:''
      }
  },
  computed:{  
    ...mapGetters(['courses']),
    ...mapState({
         lessonData: state => state.cart.lessons,
      })
  },
  methods:{
    search(searchKeyWord){
        let re = new RegExp(searchKeyWord,"gi");
        let result = "";
        let newar = this.courses.filter((item)=>{
            return item.title.match(re);
        //     //return item.match(re);
        });
        newar.forEach(function (item){
            let text = item.title;
            result += "<li>";
            result += text.replace(re, function(m){ return '<mark>'+m+'</mark>';});
            result += "</li>";
        });
        this.result = result;  
    },
    ...mapActions(['productApi'])
  },
  watch:{
      keyword(value){
          this.search(value);
          if(value == ""){
              this.result = "";
          }
      }
  },
  mounted(){
      this.productApi();
  }
}
</script>

