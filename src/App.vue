<template>
  <div id="app">
    <v-app>
      <navidraw></navidraw>
      <navitool></navitool>
      <main>
        <v-container fluid>
          <keep-alive>
            <component :is="myView"></component>
          </keep-alive>
        </v-container>
        <v-alert success :value="uploadSuccess">Upload Successful</v-alert>
      </main>
      <v-footer class="green darken-3"></v-footer>
    </v-app>
  </div>
</template>

<script>
  import navidraw from './components/navidraw.vue'
  import navitool from './components/navitool.vue'
  import Bus from './eventbus'
  import shoplist from './components/shoppinglist.vue'
  import about from './components/about.vue'
  import search from './components/search.vue'

  export default {
    name: 'app',
    created () {
      Bus.$on('successUpload', (val) => {
        this.doAlert(val)
      })
      Bus.$on('sendView', (val) => {
        this.myView = val
      })
    },
    components: {
      'navidraw': navidraw,
      'navitool': navitool,
      'shoplist': shoplist,
      'about': about,
      'search': search
    },
    data () {
      return {
        myView: shoplist,
        uploadSuccess: false
      }
    },
    methods: {
      doAlert (_val) {
        this.uploadSuccess = _val

        setTimeout(() => {
          this.uploadSuccess = false
        }, 3000)
      }
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
    padding: 5px 5px 5px 5px;
  }
</style>
