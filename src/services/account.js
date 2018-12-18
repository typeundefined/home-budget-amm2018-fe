import Axios from 'axios'

export default {
  getAccounts() {
    return Axios.get('/account')
  },
  getAccountTransactions(accountId, params = {}) {
    return Axios.get(`/account/${accountId}/transactions`, { params })
  }
}
