<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- <v-toolbar-title>My files</v-toolbar-title> -->

      <v-spacer></v-spacer>
      <v-btn @click="Logout" rounded color="primary" dark>
        Logout
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import firebase from "firebase";
import { fa } from "vuetify/lib/locale";

export default {
  name: "Header", 
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    Logout() {
      firebase.auth().signOut();
    }
  },
  // beforeMount() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     // if not logged in redirect to login page
  //     if (!user) {
  //       router.replace('/login')
  //     }
  //     // if logged in (user available)  redirect to Home
  //     else if (route.path == '/login' || route.path == '/register') {
  //       router.replace('/')
  //     }
  //   })
  // },
  watch: {
    group() {
      this.drawer = false
    },
  },
};
</script>
  


