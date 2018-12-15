<template>
  <div>
    <h1>Todo List</h1>
    <p class="lead">Uses the root-level vuex module store pattern</p>

    <ul>
      <li v-for="t in collection" :key="t.id">
        {{t.label}}
        |
        {{t.done}}
      </li>
    </ul>

    <!-- <pre>{{newModel}}</pre> -->
    <!-- <pre>{{collection}}</pre> -->

    <hr>

    <input type="text" placeholder="New Todo" v-model="newModel.label">
    <button @click="saveModel(newModel)">Create Todo</button>
  </div>
</template>


<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  components: {},
  computed: mapGetters({
    collection: 'project/collection',
    newModel: 'project/newModel'
  }),
  methods: {
    ...mapActions({
      createModel: 'project/create'
    }),
    ...mapMutations({
      setNewModel: 'project/newModel'
    }),
    saveModel (newModel) {
      this.setNewModel(newModel)
      this.createModel()
    }
  }
}
</script>
