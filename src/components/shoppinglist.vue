<template>
  <div id="shoppinglist">
    <v-card class="ml-5 mr-5">
      <v-card-row class="grey darken-2">
        <v-card-title>
          <span class="white--text">Shopping List</span>
          <v-spacer></v-spacer>
          <v-btn icon class="white--text" @click.native="getData()">
            <v-icon>refresh</v-icon>
          </v-btn>
        </v-card-title>
      </v-card-row>
      <v-divider></v-divider>
      <v-list v-if="tblData.length > 0">
        <template v-for="(line, index) in tblData">
          <v-list-item :key="line.id">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title v-html="line.itemName"></v-list-tile-title>
                <v-list-tile-sub-title v-html="line.itemQuantity"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click.native="addQuant(line)">
                  <v-icon>add</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn icon @click.native="subQuant(line)">
                  <v-icon>remove</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-item>
          <v-divider v-if="index < tblData.length - 1"></v-divider>
        </template>
      </v-list>
      <v-divider></v-divider>
      <v-container>
        <v-layout row justify-space-between>
          <v-flex xs6>
            <v-text-field name="item-name"
                          label="Item Name"
                          single-line
                          type="string"
                          :value="tblOps.addItem.itemName"
                          v-model="tblOps.addItem.itemName">

            </v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field name="item-quant"
                          label="Quantity"
                          single-line
                          type="number"
                          :value="tblOps.addItem.itemQuantity"
                          v-model.number="tblOps.addItem.itemQuantity">

            </v-text-field>
          </v-flex>
          <v-btn icon @click.native="insItem(tblOps.addItem)">
            <v-icon>library_add</v-icon>
          </v-btn>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
  import Azure from 'azure-mobile-apps-client'

  export default {
    name: 'shoppinglist',
    data () {
      return {
        tblData: [],
        tblOps: {
          addItem: {
            id: '',
            itemName: '',
            itemQuantity: 0
          }
        }
      }
    },
    methods: {
      failure (error) {
        throw new Error('Error loading data: ', error)
      },
      getData () {
        let self = this
        let url = 'https://bcurtin-webapp.azurewebsites.net'
        let client = new Azure.MobileServiceClient(url)
        let table = client.getTable('ShopList')

        table.read()
          .then(success, self.failure)

        function success(results) {
          console.log(results)
          self.tblData = results
        }
      },
      insItem (myItem) {
        let self = this
        let url = 'https://bcurtin-webapp.azurewebsites.net'
        let client = new Azure.MobileServiceClient(url)
        let table = client.getTable('ShopList')

        table.insert(myItem)
          .done((insertedItem) => {
            let id = insertedItem.id
            self.$emit('successUpload', true)
          }, this.failure)
      },
      addQuant (item) {
        let self = this
        let url = 'https://bcurtin-webapp.azurewebsites.net'
        let client = new Azure.MobileServiceClient(url)
        let table = client.getTable('ShopList')

        item.itemQuantity++
        table.update(item)
          .done((updatedItem) => {
            let id = updatedItem.id
            self.getData()
          }, this.failure)
      },
      subQuant (item) {
        let self = this
        let url = 'https://bcurtin-webapp.azurewebsites.net'
        let client = new Azure.MobileServiceClient(url)
        let table = client.getTable('ShopList')
        item.itemQuantity--
        table.update(item)
          .done((updatedItem) => {
            let id = updatedItem.id
            self.getData()
          }, this.failure)
      }
    }
  }
</script>

<style>

</style>
