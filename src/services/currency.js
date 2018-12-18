import Axios from 'axios'

export default {
  getAllCurrencies() {
    return Axios.get('/currency')
  },
  createCurrency(body) {
    return Axios.post('/currency', body)
  }
}
