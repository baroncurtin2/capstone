<template>
  <div id="app">
    <v-app>
      <navidraw></navidraw>
      <navitool></navitool>
      <main>
        <v-container fluid>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </v-container>
      </main>
      <v-footer class="green darken-3"></v-footer>
    </v-app>
  </div>
</template>

<script>
  import navidraw from './components/navidraw.vue'
  import navitool from './components/navitool.vue'

  export default {
    name: 'app',
    components: {
      'navidraw': navidraw,
      'navitool': navitool
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
