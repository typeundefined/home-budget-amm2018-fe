import store from '../store/store'

const onError = (error) => {
  switch (error.response.status) {
    case 401:
      store.dispatch('auth/logout')
      break
    case 403:
      store.dispatch('auth/logout')
      break
    default:
      break
  }
}

const beforeRequestSuccess = (config) => {
  config.headers.Authorization = `Bearer ${store.getters['auth/accessToken']}`
  return config
}

const beforeRequestError = (error) => {
  return Promise.reject(error)
}

export {
  onError,
  beforeRequestSuccess,
  beforeRequestError
}
