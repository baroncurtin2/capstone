import Vue from 'vue'
import Router from 'vue-router'
import sList from '../components/shoppinglist'
import aboutPage from '../components/about'
import search from '../components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: sList
    },
    {
      path: '/about',
      name: 'About',
      component: aboutPage
    },
    {
      path: '/search',
      name: 'Search',
      component: search
    }
  ]
})
