// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import Axios from 'axios'
import 'vuetify/dist/vuetify.css'

import store from './store/store'
import router from './router'

import { beforeRequestSuccess, onError } from './interceptors/auth'
import { handleError } from './interceptors/errorHandling'

Axios.defaults.baseURL = process.env.ROOT_API
Axios.interceptors.response.use(
  response => response,
  error => {
    handleError(error)
    return Promise.reject(error)
  }
)
Axios.interceptors.request.use(beforeRequestSuccess)
Axios.interceptors.response.use(response => response, onError)
Axios.interceptors.response.use(response => response, handleError)

Vue.use(Vuetify)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  methods: {
    setAccessKey(newJwt) {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + newJwt
      this.$router.push({
        name: 'Home'
      })
    },
    logout() {
      Axios.defaults.headers.common['Authorization'] = ''
      this.$router.push({
        name: 'Login'
      })
    }
  },
  template: '<App v-on:jwtUpdated="setAccessKey" v-on:logout="logout" />'
})
