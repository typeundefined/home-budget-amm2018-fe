// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueResource)

Vue.config.productionTip = false
Vue.http.options.root = process.env.ROOT_API

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  methods: {
    setAccessKey (newJwt) {
      Vue.http.headers.common['Authorization'] = 'Bearer ' + newJwt
      console.log(this.$http.headers.common)
      this.$router.push({name: 'Home'})
    },
    logout () {
      delete Vue.http.headers.common['Authorization']
      this.$router.push({name: 'Login'})
    }
  },
  template: '<App v-on:jwtUpdated="setAccessKey" v-on:logout="logout" />'
})
