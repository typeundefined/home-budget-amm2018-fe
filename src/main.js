// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import Axios from 'axios'
import 'vuetify/dist/vuetify.css'

import store from './store/store'
import router from './router'

import { beforeRequestSuccess } from './interceptors/auth'

function handleError(error) {
  var text = 'Unknown error'
  if (error.response) {
    if (error.response.data.hasOwnProperty('message')) {
      text = error.response.data.message
    } else {
      switch (error.response.status) {
        case 400:
          text = 'Bad request'
          break
        case 403:
          text = 'Not authorized'
          break
        case 404:
          text = 'Not found'
          break
        case 500:
          text = 'Server error'
          break
        case 0:
          text = 'Request aborted'
          break
        default:
          text = 'Unknown error ' + status
      }
    }
  } else if (error.message) {
    text = error.message
  }
  store.commit('snackbar/showError', text)
}

Axios.defaults.baseURL = process.env.ROOT_API
Axios.interceptors.response.use(
  response => response,
  error => {
    handleError(error)
    return Promise.reject(error)
  }
)
Axios.interceptors.request.use(beforeRequestSuccess)

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
