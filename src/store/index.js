import Vue from 'vue'
import Vuex from 'vuex'
import project from './projectModule'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    newTodo: {
      id: null,
      label: '',
      done: false
    },
    todos: [
      { id: 1, label: 'Sleep', done: true },
      { id: 2, label: 'Work', done: false },
      { id: 3, label: 'Study', done: false }
    ]
  },
  mutations: {
    newTodoLabel (state, label) {
      state.newTodo.label = label
    },
    todos (state, todos) {
      state.todos = todos
    }
  },
  actions: {
    createTodo ({ state, commit }) {
      const { todos, newTodo } = state

      const newModel = {
        id: todos.length + 1,
        label: newTodo.label,
        done: false
      }

      const newTodos = todos
      todos.push(newModel)

      commit('todos', newTodos)
      commit('newTodoLabel', '')
    }
  },
  modules: {
    project
  }
})
