<template>
  <v-card>
    <v-card-row class="grey darken-2">
      <v-card-title>
        <span class="white--text">My Lists</span>
        <v-spacer></v-spacer>
        <v-btn icon class="white--text" @click.native="getData()">
          <v-icon>refresh</v-icon>
        </v-btn>
      </v-card-title>
    </v-card-row>
    <v-list v-if="tblData.length > 0">
      <template v-for="(line, index) in tblData">
        <v-list-item :key="line.listId">
          <v-list-tile @click.native="searchData(line.listId.toString())">
            <v-list-tile-content>
              <v-list-tile-title>{{ getNormalDate(line.listId) }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ getNormalTime(line.listId) }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="index + 1 < tblData.length"></v-divider>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
  import Azure from 'azure-mobile-apps-client'
  import _ from 'lodash'
  import moment from 'moment'
  import Bus from '../eventbus'

  export default {
    name: 'mylists',
    created () {
      this.getData()
    },
    data () {
      return {
        tblData: []
      }
    },
    methods: {
      getData () {
        let self = this
        let url = 'https://bcurtin-webapp.azurewebsites.net'
        let client = new Azure.MobileServiceClient(url)
        let table = client.getTable('ShopList')

        table.read()
          .then(success, self.failure)

        function success(results) {
          let uniq = _.filter(results, getUniq)

          self.tblData = uniq

          function getUniq(val, i, _me) {
            return _me.indexOf(val) === i
          }
        }
      },
      getNormalDate (dateVal) {
        return moment(dateVal).format('MMMM DD, YYYY')
      },
      getNormalTime (dateVal) {
        return moment(dateVal).format('hh:mm a')
      },
      searchData (listId) {
        Bus.$emit('searchData', listId)
      }
    }
  }
</script>

<style>

</style>
