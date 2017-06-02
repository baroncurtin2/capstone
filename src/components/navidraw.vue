<template>
  <v-navigation-drawer persistent
                       disable-route-watcher
                       light
                       :mini-variant.sync="drawer.mini"
                       v-model="drawer.show">
    <v-list class="pa-0">
      <v-list-item>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Navigation</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon
                   @click.native.stop="drawer.mini = !drawer.mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-item>
    </v-list>
    <!--navigation items-->
    <v-list class="pt-0"
            dense>
      <v-divider></v-divider>
      <v-list-item v-for="item in drawer.items"
                   :key="item">
        <v-list-tile @click.native="sendView(item.comp)">
          <v-list-tile-action>
            <v-icon :fa="item.fa" medium dark>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import Bus from '../eventbus'

  export default {
    name: 'navidraw',
    created () {
      Bus.$on('toggleDrawer', () => {
        this.toggleDrawer()
      })
    },
    data () {
      return {
        drawer: {
          items: [
            {
              comp: 'shoplist',
              fa: true,
              icon: 'list-ul',
              path: '/',
              title: 'Shopping List'
            },
            {
              comp: 'search',
              fa: true,
              icon: 'search',
              path: '/search',
              title: 'Search'
            },
            {
              comp: 'about',
              fa: true,
              icon: 'building-o',
              path: '/about',
              title: 'About'
            }
          ],
          mini: true,
          right: null,
          show: true
        }
      }
    },
    methods: {
      sendView (val) {
        Bus.$emit('sendView', val)
      },
      toggleDrawer () {
        this.drawer.show = !this.drawer.show
      }
    }
  }
</script>

<style>

</style>
