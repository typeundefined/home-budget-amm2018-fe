import Axios from 'axios'

export default {
  getCategories() {
    return Axios.get('/category')
      .then(response => response.data)
  },
  createCaregory(payload) {
    // TODO: Imlement
  },
  deleteCategory(id) {
    return Axios.delete(`/category/${id}`)
  }
}
