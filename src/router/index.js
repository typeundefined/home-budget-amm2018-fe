import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AccountDetails from '@/components/AccountDetails'
import Currencies from '@/components/Currencies'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/account/:id',
      name: 'AccountDetails',
      component: AccountDetails,
      props: true
    }, {
      path: '/currencies',
      name: 'Currencies',
      component: Currencies
    }
  ]
})
