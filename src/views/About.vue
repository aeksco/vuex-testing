<template>
  <div>
    <h1>Todo List</h1>

    <ul>
      <li v-for="t in todos" :key="t.id">
        {{t.label}}
        |
        {{t.done}}
      </li>
    </ul>

    <pre>{{newTodo}}</pre>

    <hr>

    <input type="text" placeholder="New Todo" :value="$store.state.newTodo.label" @input="setLabel($event.target.value)">
    <button @click="$store.dispatch('createTodo')">Create Todo</button>
  </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
  components: {},
  computed: mapState({
    todos: 'todos',
    newTodo: 'newTodo'
  }),
  methods: mapMutations({
    setLabel: 'newTodoLabel'
  })
}
</script>
