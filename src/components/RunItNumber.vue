<template>
  <h1 :class="{
      number:true,
      jumping:visibleNumber!==number
  }">{{visibleNumber}}</h1>
</template>

<script>

export default {
    props:['number'],
    data(){
        return {
            visibleNumber: this.number
        }
    },
    methods:{
        run(){
            const diff = Math.floor((this.number - this.visibleNumber)*0.053);
            if(diff === 0){
                this.visibleNumber = this.number;
            }else{
                this.visibleNumber += diff;
                window.requestAnimationFrame(this.run);
            }
        }
    },
    watch:{
        number(){
            this.run();
        }
    }
}
</script>

<style scoped>
    .number{
        transition: transform 1s;
    }

    .number.jumping{
        transform: scale(1.3);
    }
</style>

