import CurrencyService from '../../services/currency'

const state = {
  currencies: []
}

const getters = {
  currencies() {
    return state.currencies
  }
}

const actions = {
  getCurrencies({ commit }) {
    return CurrencyService.getCurrencies().then(data => commit('setCurrencies', data))
  },
  addCurrency({ commit }, currency) {
    return CurrencyService.createCurrency(currency).then(data => {
      commit('addCurrency', data)
    })
  }
}

const mutations = {
  setCurrencies(state, currencies) {
    state.currencies = currencies
  },
  addCurrency(state, currency) {
    state.currencies.push(currency)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
