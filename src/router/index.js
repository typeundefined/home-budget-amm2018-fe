import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NewAccount from '@/components/NewAccount'
import AccountDetails from '@/components/AccountDetails'

Vue.use(Router)

export default new Router({
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
      path: '/newaccount',
      name: 'NewAccount',
      component: NewAccount
    }, {
      path: '/account/:id',
      name: 'Account details',
      component: AccountDetails
    }
  ]
})
