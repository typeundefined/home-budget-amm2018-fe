import Axios from 'axios'

export default {
  login(username, password) {
    return Axios.post('auth/login', {username: username, password: password})
  }
}
