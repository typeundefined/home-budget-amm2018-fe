import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AccountDetails from '@/components/AccountDetails'
import Currencies from '@/components/Currencies'

import Init from './guards/Init'
import IsLoggedIn from './guards/IsLoggedIn'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: IsLoggedIn
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
    props: true,
    beforeEnter: IsLoggedIn
  }, {
    path: '/currencies',
    name: 'Currencies',
    component: Currencies,
    beforeEnter: IsLoggedIn
  }]
})

router.beforeEach(Init)

export default router
