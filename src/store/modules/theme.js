const state = {
  darkTheme: localStorage.getItem('darkTheme') || false
}

const getters = {
  darkTheme() {
    return state.darkTheme
  }
}

const actions = {
  setTheme({ commit }, flag) {
    localStorage.setItem('darkTheme', flag)
    commit('setTheme', flag)
  }
}

const mutations = {
  setTheme(state, flag) {
    state.darkTheme = flag
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
