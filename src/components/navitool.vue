<template>
  <v-toolbar class="green darken-3">
    <v-toolbar-side-icon light @click.native.stop="toggleDrawer()"></v-toolbar-side-icon>
    <v-container>
      <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
    </v-container>
    <v-spacer></v-spacer>
    <google-auth></google-auth>
  </v-toolbar>
</template>

<script>
  import googleAuth from './googleauth.vue'
  import fb from 'firebase'
  import Bus from '../eventbus'

  export default {
    name: 'navitool',
    components: {
      'googleAuth': googleAuth
    },
    data () {
      return {
        title: 'The Spill'
      }
    },
    methods: {
      toggleDrawer () {
        Bus.$emit('toggleDrawer', true)
      }
    }
  }
</script>

