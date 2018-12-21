import Axios from 'axios'

export default {
  getAccounts() {
    return Axios.get('/account')
      .then(response => response.data)
  },
  createAccount(payload) {
    return Axios.post('/account', payload)
      .then(response => response.data)
  },
  deleteAccount(accountId) {
    return Axios.delete(`/account/${accountId}`)
  },
  getAccountTransactions(accountId, params = {}) {
    return Axios.get(`/account/${accountId}/transactions`, { params })
      .then(response => response.data)
  },
  deleteTransaction(accountId, transactionId) {
    return Axios.delete(`/account/${accountId}/transactions/${transactionId}`)
  }
}
