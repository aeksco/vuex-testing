import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
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
    newLabel (state, label) {
      state.newTodo.label = label
    },
    collection (state, collection) {
      state.collection = collection
    }
  },
  actions: {
    create ({ state, commit }) {
      console.log('CREATE TODO')
    }
  }
}
