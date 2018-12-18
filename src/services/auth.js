import Axios from 'axios'

export default {
  login(credentials) {
    return Axios.post('auth/login', credentials)
  }
}
