<template>
  <div> 
   <h1>Run Number</h1>
   <RunItNumber :number="number"/>
   <button @click="number += 100">+100</button>
  </div>
</template>

<script>
import RunItNumber from '@/components/RunItNumber';
export default {
    data(){
        return{
            number:0
        }
    },
    components:{
        RunItNumber,
    }
}
</script>

