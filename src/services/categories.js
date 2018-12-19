import Axios from 'axios'

export default {
  getCategories() {
    return Axios.get('/category')
      .then(response => response.data)
      .catch(error => Promise.reject(error))
  },
  createCaregory(payload) {
    // TODO: Imlement
  },
  deleteCategory(id) {
    return Axios.delete(`/category/${id}`)
  }
}
