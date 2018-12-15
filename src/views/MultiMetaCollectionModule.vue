<template>
  <div>
    <h1>People List</h1>
    <p class="lead">Uses the meta-collection-module pattern</p>

    <ul>
      <li v-for="t in personCollection" :key="t.id">
        {{t.name}}
        |
        {{t.age}}
      </li>
    </ul>

    <hr>

    <input type="text" placeholder="Name" v-model="newPersonModel.name">
    <input type="number" placeholder="Age" v-model="newPersonModel.age">
    <button @click="savePersonModel(newPersonModel)">Create Person</button>

    <hr>

    <h1>Place List</h1>
    <p class="lead">Uses the meta-collection-module pattern</p>

    <ul>
      <li v-for="t in placeCollection" :key="t.id">
        {{t.label}}
        |
        {{t.open}}
      </li>
    </ul>

    <hr>

    <input type="text" placeholder="Name" v-model="newPlaceModel.label">
    <input type="checkbox" v-model="newPlaceModel.open">
    <button @click="savePlaceModel(newPlaceModel)">Create Place</button>


  </div>
</template>


<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  components: {},
  computed: mapGetters({
    personCollection: 'project/person/collection',
    newPersonModel: 'project/person/newModel',
    placeCollection: 'project/place/collection',
    newPlaceModel: 'project/place/newModel'
  }),
  methods: {
    ...mapActions({
      createPersonModel: 'project/person/create',
      createPlaceModel: 'project/place/create'
    }),
    ...mapMutations({
      setNewPersonModel: 'project/person/newModel',
      setNewPlaceModel: 'project/place/newModel'
    }),
    savePersonModel (newModel) {
      this.setNewPersonModel(newModel)
      this.createPersonModel()
    },
    savePlaceModel (newModel) {
      this.setNewPlaceModel(newModel)
      this.createPlaceModel()
    }
  }
}
</script>
