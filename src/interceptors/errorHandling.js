import store from '../store/store'

const handleError = (error) => {
  var text = 'Unknown error'
  if (error.response) {
    if (error.response.data.hasOwnProperty('message')) {
      text = error.response.data.message
    } else {
      switch (error.response.status) {
        case 400:
          text = 'Bad request'
          break
        case 403:
          text = 'Not authorized'
          break
        case 404:
          text = 'Not found'
          break
        case 500:
          text = 'Server error'
          break
        case 0:
          text = 'Request aborted'
          break
        default:
          text = 'Unknown error ' + status
      }
    }
  } else if (error.message) {
    text = error.message
  }
  store.commit('snackbar/showError', text)
}

export {
  handleError
}
