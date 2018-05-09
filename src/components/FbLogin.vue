<template>
  <div> 
     <h1>FB Login</h1>
     登入狀態{{connected}}
     <button v-if="!connected" @click="connect">Facebook登入</button>
     <h2 v-else>{{username}}登入
        <img :src="picture">
        <button @click="logout">登出</button>
    </h2>  
  </div>
</template>
<script>
export default {
    data(){
        return{
            connected:false,
            username:'',
            picture:''
        }
    },
    methods:{
        connect(){
            FB.login((result)=>{
                if(result.status == 'connected'){
                    this.connected = true;
                }
            });
        },
        loginSatus(result){
            if(result.status == 'connected'){
                this.connected = true;
                FB.api('/me','GET',{
                    fields:['id','name','picture','email']
                },(response) => {
                    this.picture = response.picture.data.url;
                    this.username = response.name;
                });
            };
        },
        logout(){
            FB.logout((response) =>{
                this.connected = false;
            });
        }
    },
    mounted(){
        FB.init({
            appId:714082478750830,
            version:'v2.8'
        });       
        FB.getLoginStatus(this.loginSatus);
    }
}
</script>

