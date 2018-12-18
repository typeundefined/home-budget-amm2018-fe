import Vue from 'vue'
import Vuex from 'vuex'

import snackbar from './modules/snackbar'
import auth from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    snackbar,
    auth
  }
})

export default store
