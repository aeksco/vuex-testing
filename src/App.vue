<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      |
      <router-link to="/about">Root State</router-link>
      |
      <router-link to="/project_module">Project Module</router-link>
      |
      <router-link to="/collection_module">Collection Module</router-link>
      |
      <router-link to="/meta_collection_module">Meta Collection Module</router-link>
      |
      <router-link to="/multi_meta_collection_module">Multi-Meta Collection Module</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
