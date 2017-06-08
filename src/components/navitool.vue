<template>
  <v-toolbar class="green darken-3">
    <v-toolbar-side-icon light @click.native.stop="toggleDrawer()"></v-toolbar-side-icon>
    <v-container>
      <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
    </v-container>
    <v-spacer></v-spacer>
    <v-btn icon @native.click="signOut()" v-tooltip:bottom="myTooltip">
      <v-icon fa class="white--text">sign-out</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import fb from 'firebase'
  import Bus from '../eventbus'

  export default {
    name: 'navitool',
    data () {
      return {
        myTooltip: {
          html: 'Log-Off'
        },
        title: 'The Spill'
      }
    },
    methods: {
      signOut () {
        let self = this
        fb.auth().signOut().then(() => {
          Bus.$emit('signedOut', true)
        }).catch((error) => {
          // An error happened.
          console.log(error)
          Bus.$emit('signedOut', false)
        })
      },
      toggleDrawer () {
        Bus.$emit('toggleDrawer', true)
      }
    }
  }
</script>

