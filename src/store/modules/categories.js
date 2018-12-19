import CategoryService from '../../services/categories'

const state = {
  categories: []
}

const getters = {
  categories() {
    return state.categories
  }
}

const actions = {
  getCategories({ commit }) {
    return CategoryService.getCategories().then(data => commit('setCategories', data))
  },
  deleteCategory({ commit }, id) {
    return CategoryService.deleteCategory(id).then(() => {
      commit('deleteCategory', id)
    })
  },
  createCategory({ commit }, payload) {
    return CategoryService.createCaregory(payload).then(data => {
      commit('addCategory', data)
    })
  }
}

const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  deleteCategory(state, id) {
    let i = state.categories.map(item => item.id).indexOf(id)
    state.categories.splice(i, 1)
  },
  addCategory(state, category) {
    state.categories.push(category)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
