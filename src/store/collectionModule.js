export default {
  namespaced: true,
  state: {
    defaultNewModel: {
      id: null,
      label: '',
      active: false
    },
    newModel: {
      id: null,
      label: '',
      active: false
    },
    collection: [
      { id: 1, label: 'Contributor A', active: true },
      { id: 2, label: 'Contributor B', active: false },
      { id: 3, label: 'Contributor C', active: false }
    ]
  },
  mutations: {
    resetNewModel (state) {
      state.newModel = state.defaultNewModel
    },
    newModel (state, model) {
      state.newModel = Object.assign({}, model)
    },
    collection (state, collection) {
      state.collection = collection
    }
  },
  getters: {
    collection (state) {
      return state.collection
    },
    newModel (state) {
      return Object.assign({}, state.newModel)
    }
  },
  actions: {
    create ({ state, commit }) {

      // Sets up createdModel
      const createdModel = Object.assign({}, state.newModel);
      createdModel.id = Math.random()

      // Resets state.newModel()
      commit('resetNewModel')

      // Updates state.collection
      commit('collection', [...state.collection, createdModel])
    }
  }
}
