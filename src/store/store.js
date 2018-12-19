import Vue from 'vue'
import Vuex from 'vuex'

import snackbar from './modules/snackbar'
import auth from './modules/auth'
import accounts from './modules/accounts'
import currencies from './modules/currencies'
import categories from './modules/categories'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    snackbar,
    auth,
    accounts,
    currencies,
    categories
  }
})

export default store
