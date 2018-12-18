import Axios from 'axios'

export default {
  getAccounts() {
    return Axios.get('/account')
      .then(response => response.data)
      .catch(error => Promise.reject(error.response))
  },
  deleteAccount(accountId) {
    return Axios.delete(`/account/${accountId}`)
  },
  getAccountTransactions(accountId, params = {}) {
    return Axios.get(`/account/${accountId}/transactions`, {
      params
    })
      .then(response => response.data)
      .catch(error => Promise.reject(error.response))
  },
  deleteTransaction(accountId, transactionId) {
    return Axios.delete(`/account/${accountId}/transactions/${transactionId}`)
  }
}
