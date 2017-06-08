<template>
  <v-btn @click.native.stop="startSignIn()">
    <v-icon fa left dark>google</v-icon>
    Google Sign-In
  </v-btn>
</template>

<script>
  import _ from 'lodash'
  import fb from 'firebase'
  import Bus from '../eventbus'

  export default {
    name: 'googleauth',
    methods: {
      startSignIn () {
        let fbConfig = {
          apiKey: 'AIzaSyDNDEE4WU1PcZxPAmBFlfyosnWDZdrKGGo',
          authDomain: 'capstone-170011.firebaseapp.com',
          databaseURL: 'https://capstone-170011.firebaseio.com',
          projectId: 'capstone-170011',
          storageBucket: 'capstone-170011.appspot.com',
          messagingSenderId: '513981692299'
        }
        let fbApp = fb.initializeApp(fbConfig)

        let provider = new fb.auth.GoogleAuthProvider()
        fb.auth().signInWithRedirect(provider)
        fb.auth().getRedirectResult()
          .then((result) => {
            let token = result.credential.accessToken
            let user = result.user

            Bus.$emit('signedIn', true)
          })
          .catch((error) => {
            // Handle Errors here.
            let errorCode = error.code
            let errorMessage = error.message
            // The email of the user's account used.
            let email = error.email
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential

            Bus.$emit('signedIn', false)
          })
      }
    }
  }
</script>

<style>

</style>
