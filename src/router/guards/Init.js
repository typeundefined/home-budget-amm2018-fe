import store from '../../store/store'

export default (to, from, next) => {
  const accessToken = localStorage.getItem('accessToken')
  console.log(accessToken)

  if (!accessToken) {
    return next()
  }
  store.commit('auth/setLoggedIn', true)

  store.commit('auth/setAccessToken', accessToken)
  return next()
}
