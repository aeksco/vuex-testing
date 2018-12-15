<template>
  <div>
    <h1>People List</h1>
    <p class="lead">Uses the meta-collection-module pattern</p>

    <ul>
      <li v-for="t in collection" :key="t.id">
        {{t.name}}
        |
        {{t.age}}
      </li>
    </ul>

    <hr>

    <input type="text" placeholder="Name" v-model="newModel.name">
    <input type="number" placeholder="Age" v-model="newModel.age">
    <button @click="saveModel(newModel)">Create Person</button>

  </div>
</template>


<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  components: {},
  computed: mapGetters({
    collection: 'project/person/collection',
    newModel: 'project/person/newModel'
  }),
  methods: {
    ...mapActions({
      createModel: 'project/person/create'
    }),
    ...mapMutations({
      setNewModel: 'project/person/newModel'
    }),
    saveModel (newModel) {
      this.setNewModel(newModel)
      this.createModel()
    }
  }
}
</script>
