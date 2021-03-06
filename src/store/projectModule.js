import collectionModule from './collectionModule'
import metaCollectionModule from './metaCollectionModule'

const NEW_PERSON_MODEL = {
  id: null,
  name: '',
  age: ''
}

const NEW_PLACE_MODEL = {
  id: null,
  label: '',
  open: true
}

export default {
  namespaced: true,
  modules: {
    contributors: collectionModule,
    person: metaCollectionModule({ NEW_MODEL: NEW_PERSON_MODEL }),
    place: metaCollectionModule({ NEW_MODEL: NEW_PLACE_MODEL })
  },
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
      { id: 1, label: 'Project A', active: true },
      { id: 2, label: 'Project B', active: false },
      { id: 3, label: 'Project C', active: false }
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
