import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Store from '@/components/Store'
import productCarts from '@/components/productCarts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/online-store/:storeName',
      name: 'Store',
      component: Store
    },
    {
      path: '/product-cart',
      name: 'productCarts',
      component: productCarts
    }
  ]
})
