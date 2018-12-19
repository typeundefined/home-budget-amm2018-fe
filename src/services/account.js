import Axios from 'axios'

export default {
  getAccounts() {
    return Axios.get('/account')
      .then(response => response.data)
      .catch(error => Promise.reject(error))
  },
  createAccount(payload) {
    return Axios.post('/account', payload)
      .then(response => response.data)
      .catch(error => Promise.reject(error))
  },
  deleteAccount(accountId) {
    return Axios.delete(`/account/${accountId}`)
  },
  getAccountTransactions(accountId, params = {}) {
    return Axios.get(`/account/${accountId}/transactions`, { params })
      .then(response => response.data)
      .catch(error => Promise.reject(error))
  },
  deleteTransaction(accountId, transactionId) {
    return Axios.delete(`/account/${accountId}/transactions/${transactionId}`)
  }
}
