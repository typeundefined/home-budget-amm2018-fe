import store from '../../store/store'

export default (to, from, next) => {
  const accessToken = localStorage.getItem('accessToken')
  console.log(accessToken)

  if (!accessToken) {
    return next()
  }

  store.commit('auth/setAccessToken', accessToken)
  console.log('Установлен access токен')

  store.dispatch('auth/authenticate')
    .then(() => {
      next()
    })
    .catch((error) => {
      store.dispatch('auth/logout')
      next('/login')
      Promise.reject(error)
    })
  return next()
}
