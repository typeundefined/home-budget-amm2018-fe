// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import Datetime from 'vue-datetime'
import VueSnackbar from 'vue-snack'
import 'vue-snack/dist/vue-snack.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(Datetime)
Vue.use(VueSnackbar)

Vue.config.productionTip = false
Vue.http.options.root = process.env.ROOT_API

// const axios = require('axios')

/* eslint-disable no-new */

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', localStorage.getItem('accessToken'))
  request.headers.set('Accept', 'application/json')
  next()
})
// Vue.http.interceptors.push({
//   request: (request) => {
//     console.log('we have a request')
//     request.headers.set('Authorization', localStorage.getItem('accessToken'))
//     request.headers.set('Accept', 'application/json')
//     return request
//   },
//   response: (response) => {
//     console.log('we got a response', response)
//     return response
//   },
//   error: (err) => {
//     console.log('error is', err)
//   }
// })

new Vue({
  el: '#app',
  router,
  components: {App},
  methods: {
    setAccessKey (newJwt) {
      Vue.http.headers.common['Authorization'] = 'Bearer ' + newJwt
      console.log(this.$http.headers.common)
      this.$router.push({name: 'Home'})
    },
    logout () {
      delete Vue.http.headers.common['Authorization']
      localStorage.removeItem('accessToken')
      this.$router.push({name: 'Login'})
    }
  },
  template: '<App v-on:jwtUpdated="setAccessKey" v-on:logout="logout" />'
})

// axios.interceptors.response.use((response) => {
//   console.log('Do something before request is sent')
//   return response
// }, (error) => {
//   console.log('Do something before request is sent')
//   if (error.response.status === 404) {
//     localStorage.removeItem('token')
//     router.push({ path: '/login' })
//   }
//   return Promise.reject(error)
// })
//
// Vue.http.interceptors.request.use((config) => {
//   // Do something before request is sent
//   console.log('Do something before request is sent')
//   return config
// }, (error) => {
//   // Do something with request error
//   console.log('Do something with request error')
//   return Promise.reject(error)
// })
//
// // Add a response interceptor
// Vue.http.interceptors.response.use((response) => {
//   // Do something with response data
//   console.log('Do something with response data')
//   return response
// }, (error) => {
//   // Do something with response error
//   console.log('Do something with response error')
//   return Promise.reject(error)
// })

// const axios = require('axios')
//
// // Make a request for a user with a given ID
// axios.get('/*')
//   .then(function (response) {
//     // handle success
//     console.log('response')
//     console.log(response)
//   })
//   .catch(function (error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       console.log('The request was made and the server responded with a status code')
//       // that falls out of the range of 2xx
//       console.log(error.response.data)
//       console.log(error.response.status)
//       console.log(error.response.headers)
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.log('The request was made but no response was received')
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       console.log(error.request)
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log('Something happened in setting up the request that triggered an Error')
//       console.log('Error', error.message)
//     }
//   })
//   .then(function () {
//     // always executed
//   })
