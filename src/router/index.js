import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Slist from '@/components/shoppinglist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: Slist
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
