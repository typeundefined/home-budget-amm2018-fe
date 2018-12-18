import AccountService from '../../services/account'

const state = {
  accounts: []
}

const getters = {
  accounts() {
    return state.accounts
  }
}

const actions = {
  getAccounts({ commit }) {
    return AccountService.getAccounts().then(data => commit('setAccounts', data))
  },
  deleteAccount({ commit }, id) {
    return AccountService.deleteAccount(id).then(() => {
      commit('deleteAccount', id)
    })
  },
  addAccount({ commit }, payload) {
    // TODO: Implement
  }
}

const mutations = {
  setAccounts(state, accounts) {
    state.accounts = accounts
  },
  deleteAccount(state, id) {
    var i = state.accounts.map(item => item.id).indexOf(id)
    state.accounts.splice(i, 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
