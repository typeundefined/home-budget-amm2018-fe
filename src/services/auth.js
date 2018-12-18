import Axios from 'axios'

export default {
  login(credentials) {
    return Axios.post('auth/login', credentials)
  },
  authenticate() {
    // TODO: add method for check access token
    return Axios.get('/account')
  },
  registration(payload) {
    return Axios.post('auth/register', payload)
  }
}
