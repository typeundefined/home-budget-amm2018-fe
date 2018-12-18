import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    snackbar: {
      visible: false,
      text: null,
      color: null,
      timeout: 3000,
      multiline: false
    }
  },
  mutations: {
    showSnackbar(state, payload) {
      state.snackbar.text = payload.text
      state.snackbar.color = payload.color
      state.snackbar.multiline = (payload.text.length > 50)

      if (payload.multiline) {
        state.snackbar.multiline = true
      }

      if (payload.timeout) {
        state.snackbar.timeout = payload.timeout
      }

      state.snackbar.visible = true
    },
    closeSnackbar(state) {
      state.snackbar.visible = false
      state.snackbar.multiline = false
      state.snackbar.timeout = 3000
      state.snackbar.text = null
    },
    showError(state, message) {
      state.snackbar.text = message
      state.snackbar.color = 'error'
      state.snackbar.multiline = (message.length > 50)
      state.snackbar.visible = true
    }
  }
})
