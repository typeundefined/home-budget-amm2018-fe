import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import EditAccount from '@/components/EditAccount'
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
      path: '/edit-account/:id',
      name: 'EditAccount',
      props: true,
      component: EditAccount
    }, {
      path: '/new-account/',
      name: 'NewAccount',
      component: EditAccount
    }, {
      path: '/account/:id',
      name: 'AccountDetails',
      props: true,
      component: AccountDetails
    }
  ]
})
