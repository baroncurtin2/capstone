<template>
  <v-layout>
    <v-btn @click.native.stop="startSignIn()" icon class="white--text" v-tooltip:bottom="logInTip">
      <v-icon fa>google</v-icon>
    </v-btn>
    <v-btn icon @native.click="startSignOut()" v-tooltip:bottom="logOffTip">
      <v-icon fa class="white--text">sign-out</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
  import _ from 'lodash'
  import fb from 'firebase'
  import Bus from '../eventbus'

  export default {
    name: 'googleauth',
    data () {
      return {
        logInTip: {
          html: 'Google Sign-In'
        },
        logOffTip: {
          html: 'Log-Off'
        }
      }
    },
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
        fb.auth().signInWithPopup(provider)
        //        fb.auth().getRedirectResult()
          .then((result) => {
            if (result.credential) {
              let token = result.credential.accessToken
              let user = result.user
              Bus.$emit('signedIn', true)
            }
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
      },
      startSignOut () {
        let self = this
        fb.auth().signOut()
          .then(() => {
            Bus.$emit('signedOut', true)
          }).catch((error) => {
          // An error happened.
          console.log(error)
          Bus.$emit('signedOut', false)
        })
      }
    }
  }
</script>

<style>

</style>
