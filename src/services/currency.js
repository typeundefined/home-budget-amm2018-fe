import Axios from 'axios'

export default {
  getCurrencies() {
    return Axios.get('/currency')
      .then(response => response.data)
  },
  createCurrency(body) {
    return Axios.post('/currency', body)
      .then(response => response.data)
  }
}
