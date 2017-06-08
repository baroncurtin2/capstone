<template>
  <v-card>
    <v-card-row class="teal darken-1">
      <v-card-title>
        <span class="white--text">About Us</span>
        <v-spacer></v-spacer>
        <v-icon fa medium class="white--text">building-o</v-icon>
      </v-card-title>
    </v-card-row>
    <!--image-->
    <v-card-row img="/static/about-us.jpg" height="300px">
    </v-card-row>
    <v-card-text class="teal darken-3 white--text">
      <div v-html="msg"></div>
    </v-card-text>
    <v-card-row actions class="teal darken-1 mt-0">
      <v-btn flat class="white--text">Contact Us</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon class="white--text">contact_mail</v-icon>
      </v-btn>
    </v-card-row>
  </v-card>
</template>

<script>
  export default {
    name: 'aboutpage',
    data () {
      return {
        msg: 'The Spill is a subsidiary of <em>Curtin & Associates LLC</em>. We aim to provide our users with the greatest' +
        ' quality web applications and information at your fingertips. Information is power and power is our gift to you. We' +
        ' hope that you enjoy the ride with us, and look forward to your continued patronage as we devise new ways to empower you, ' +
        'the user.'
      }
    },
    methods: {}
  }
</script>

<style>

</style>
