<template>
  <div class="navitool">
    <v-toolbar class="green darken-3">
      <v-toolbar-side-icon light @click.native.stop="toggleDrawer()"></v-toolbar-side-icon>
      <v-container>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-container>
    </v-toolbar>
  </div>
</template>

<script>
  import Bus from '../eventbus'

  export default {
    name: 'navitool',
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

