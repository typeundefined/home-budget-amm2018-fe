import store from '../store/store'

const onError = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        store.dispatch('auth/logout')
        break
      default:
        break
    }
  }
  Promise.reject(error)
}

const beforeRequestSuccess = (config) => {
  config.headers.Authorization = `Bearer ${store.getters['auth/accessToken']}`
  return config
}

export {
  onError,
  beforeRequestSuccess
}
