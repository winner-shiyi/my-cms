<template>
  <div id="app">
    <CmsLayout>
      <router-view/>
    </CmsLayout>
  </div>
</template>

<script>
import CmsLayout from './views/layout/layout.vue'

export default {
  name: 'App',
  components: {
    CmsLayout,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
