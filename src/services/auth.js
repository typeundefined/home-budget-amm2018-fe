import Axios from 'axios'

export default {
  login(credentials) {
    return Axios.post('auth/login', credentials)
  },
  authenticate() {
    // TODO: add method for check access token1
    return Axios.get('/account')
  }
}
