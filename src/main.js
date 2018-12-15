// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import {
  store
} from './store/store'

Vue.use(VueResource)
Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.http.options.root = process.env.ROOT_API
Vue.http.interceptors.push(
  function (request, next) {
    next(
      function (response) {
        if (!response.ok) {
          var text = response.data.message
          // TODO: Improve non-Spring errors handling
          if (!text) {
            switch (response.status) {
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
          store.commit('showSnackbar', {
            text: text,
            color: 'error'
          })
        }
      }
    )
  }
)

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
      Vue.http.headers.common['Authorization'] = 'Bearer ' + newJwt
      console.log(this.$http.headers.common)
      this.$router.push({
        name: 'Home'
      })
    },
    logout() {
      delete Vue.http.headers.common['Authorization']
      this.$router.push({
        name: 'Login'
      })
    }
  },
  template: '<App v-on:jwtUpdated="setAccessKey" v-on:logout="logout" />'
})
