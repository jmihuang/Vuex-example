import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShppingCart from '@/components/ShppingCart'
import Search from '@/components/Search'
import RunNumber from '@/components/RunNumber'
import FbLogin from '@/components/FbLogin'
import InfiniteScroll from '@/components/InfiniteScroll'

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
        },
        {
          path: 'search',
          name: 'Search',
          component: Search
        },
        {
          path: 'runnumber',
          name: 'RunNumber',
          component: RunNumber
        },
        {
          path: 'fblogin',
          name: 'FbLogin',
          component: FbLogin
        },
        {
          path: 'infiniteScroll',
          name: 'InfiniteScroll',
          component: InfiniteScroll
        }
      ]
    }
  ]
})
FbLogin
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
