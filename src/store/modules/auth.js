import AuthService from '../../services/auth'

const state = {
  loggedIn: false,
  tokens: {
    access: null
  }
}

const getters = {
  loggedIn() {
    return state.loggedIn
  },
  accessToken() {
    return state.tokens.access
  },
  auth() {
    return state
  }
}

const actions = {
  login({ commit }, credentials) {
    return AuthService.login(credentials)
      .then(response => {
        commit('setLoggedIn', true)
        commit('setAccessToken', response.data.accessToken)
      })
  },
  authenticate({ commit }) {
    return AuthService.authenticate().then((data) => {
      commit('setLoggedIn', true)
    })
  },
  logout({ commit }) {
    commit('setLoggedIn', false)
    commit('clearAccessToken')
  }
}

const mutations = {
  setAccessToken(state, token) {
    localStorage.setItem('accessToken', token)
    state.tokens.access = token
  },
  clearAccessToken(state) {
    localStorage.removeItem('accessToken')
    state.tokens.access = null
  },
  setLoggedIn(state, status) {
    state.loggedIn = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
