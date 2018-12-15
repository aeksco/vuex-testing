// Exports a collection build around a basic model prototype
export default function ({ NEW_MODEL }) {

  return {
    namespaced: true,
    state: {
      defaultNewModel: Object.assign({}, NEW_MODEL),
      newModel: Object.assign({}, NEW_MODEL),
      collection: []
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

}
