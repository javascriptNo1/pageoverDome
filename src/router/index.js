import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import commodity from '@/components/commodity'
import shop from '@/components/shop'
import shoppingcart from '@/components/shoppingcart'
import Vommodity from '@/assembly/Vommodity'
import Bommodity from '@/assembly/Bommodity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: commodity,
      children:[
        {
          path: '/',
          name:'/',
          component: Vommodity,
        },
        {
          path: 'bommodity',
          name:'bommodity',
          component: Bommodity,
        },
      ]
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: shoppingcart
    }
  ]
})


