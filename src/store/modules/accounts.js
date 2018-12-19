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
    return AccountService.createAccount(payload).then(data => {
      commit('addAccount', data)
    })
  }
}

const mutations = {
  setAccounts(state, accounts) {
    state.accounts = accounts
  },
  deleteAccount(state, id) {
    let i = state.accounts.map(item => item.id).indexOf(id)
    state.accounts.splice(i, 1)
  },
  addAccount(state, account) {
    state.accounts.push(account)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
