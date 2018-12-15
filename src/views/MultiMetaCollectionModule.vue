<template>
  <div>
    <h1>People List</h1>
    <p class="lead">Uses the meta-collection-module pattern</p>

    <ul>
      <li v-for="t in personCollection" :key="t.id">
        {{t.name}}
        |
        {{t.age}}
        <button @click="setEditPersonModel(t)">Edit</button>
        <button @click="destroyPersonModel(t.id)">Destroy</button>
      </li>
    </ul>

    <hr>
    New Person
    <input type="text" placeholder="Name" v-model="newPersonModel.name">
    <input type="number" placeholder="Age" v-model="newPersonModel.age">
    <button @click="savePerson(newPersonModel)">Create Person</button>
    <hr>
    Edit Person
    <input type="text" placeholder="Name" v-model="editPersonModel.name">
    <input type="number" placeholder="Age" v-model="editPersonModel.age">
    <button @click="updatePerson(editPersonModel)">Update Person</button>

    <hr>

    <h1>Place List</h1>
    <p class="lead">Uses the meta-collection-module pattern</p>

    <ul>
      <li v-for="t in placeCollection" :key="t.id">
        {{t.label}}
        |
        {{t.open}}
        <button @click="setEditPlaceModel(t)">Edit</button>
        <button @click="destroyPlaceModel(t.id)">Destroy</button>
      </li>
    </ul>

    <hr>
    New Place
    <input type="text" placeholder="Name" v-model="newPlaceModel.label">
    <input type="checkbox" v-model="newPlaceModel.open">
    <button @click="savePlace(newPlaceModel)">Create Place</button>
    <hr>
    Edit Place
    <input type="text" placeholder="Name" v-model="editPlaceModel.label">
    <input type="checkbox" v-model="editPlaceModel.open">
    <button @click="updatePlace(editPlaceModel)">Update Place</button>
    <hr>

  </div>
</template>


<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  components: {},
  computed: mapGetters({
    personCollection: 'project/person/collection',
    newPersonModel: 'project/person/newModel',
    editPersonModel: 'project/person/editModel',

    placeCollection: 'project/place/collection',
    newPlaceModel: 'project/place/newModel',
    editPlaceModel: 'project/place/editModel'
  }),
  methods: {
    ...mapActions({
      createPersonModel: 'project/person/create',
      updatePersonModel: 'project/person/update',
      destroyPersonModel: 'project/person/destroy',

      createPlaceModel: 'project/place/create',
      updatePlaceModel: 'project/place/update',
      destroyPlaceModel: 'project/place/destroy'
    }),
    ...mapMutations({
      setNewPersonModel: 'project/person/newModel',
      setEditPersonModel: 'project/person/editModel',

      setNewPlaceModel: 'project/place/newModel',
      setEditPlaceModel: 'project/place/editModel'
    }),
    savePerson (newModel) {
      this.setNewPersonModel(newModel)
      this.createPersonModel()
    },
    savePlace (newModel) {
      this.setNewPlaceModel(newModel)
      this.createPlaceModel()
    },
    updatePlace (newModel) {
      this.setEditPlaceModel(newModel)
      this.updatePlaceModel()
    },
    updatePerson (newModel) {
      this.setEditPersonModel(newModel)
      this.updatePersonModel()
    }
  }
}
</script>
