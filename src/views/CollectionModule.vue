<template>
  <div>
    <h1>Contributor List</h1>
    <p class="lead">Uses the collection module pattern (no meta)</p>

    <ul>
      <li v-for="t in collection" :key="t.id">
        {{t.label}}
        |
        {{t.done}}
      </li>
    </ul>

    <pre>{{collection}}</pre>

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
    collection: 'project/contributors/collection',
    newModel: 'project/contributors/newModel'
  }),
  methods: {
    ...mapActions({
      createModel: 'project/contributors/create'
    }),
    ...mapMutations({
      setNewModel: 'project/contributors/newModel'
    }),
    saveModel (newModel) {
      this.setNewModel(newModel)
      this.createModel()
    }
  }
}
</script>
