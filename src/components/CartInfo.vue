<template>
<div class="cart-info">
 <i class="fas fa-shopping-cart"></i>
     購物車內<b>{{cartLength}}</b>套課程，
     總共<b>{{cartTotal}}</b>元
    <a class="white-text float-right"> <i class="fas fa-times-circle"></i> </a> 
</div>
</template>

<script>
import { mapState ,mapGetters} from 'vuex';
export default {
    computed:{
        ...mapGetters(['cartLength','cartTotal'])
    }
}
</script>

