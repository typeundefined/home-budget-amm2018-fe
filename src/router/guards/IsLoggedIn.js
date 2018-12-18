import store from '../../store/store'

export default (to, from, next) => {
  if (!store.getters['auth/loggedIn'] && !store.getters['auth/accessToken']) {
    store.dispatch('auth/logout')
    return next('/login')
  }

  return next()
}
