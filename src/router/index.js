import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShppingCart from '@/components/ShppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'shppingCart',
          name: 'ShppingCart',
          component: ShppingCart
        }
      ]
    }
  ]
})

      // routes: [
      //   {
      //     path: '/',
      //     name: 'HelloWorld',
      //     component: HelloWorld,
      //     children: [
      //       {
      //         path: 'ShppingCart',
      //         name: 'ShppingCart',
      //         component: ShppingCart,
      //       }, {
      //         path: 'Products',
      //         name: 'Products',
      //         component: Products,
      //       }
      //     ]
      //   }
      // ]
    // })
