const state = {
  visible: false,
  text: null,
  color: null,
  timeout: 3000,
  multiline: false
}

const getters = {}

const mutations = {
  showSnackbar(state, payload) {
    state.text = payload.text
    state.color = payload.color
    state.multiline = (payload.text.length > 50)

    if (payload.multiline) {
      state.multiline = true
    }

    if (payload.timeout) {
      state.timeout = payload.timeout
    }

    state.visible = true
  },
  closeSnackbar(state) {
    state.visible = false
    state.multiline = false
    state.timeout = 3000
    state.text = null
  },
  showError(state, message) {
    state.text = message
    state.color = 'error'
    state.multiline = (message.length > 50)
    state.visible = true
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
