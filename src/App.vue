<template>
  <v-app>
    <Header v-if="authenticated" />
    <router-view />
  </v-app>
</template>

<script>
import firebase from "firebase";
import Header from "./components/Header.vue";
export default {
  name: "App",
  data: () => ({
    authenticated: true,
  }),
  components: {
    Header
  },
  beforeMount() {
    firebase.auth().onAuthStateChanged((user) => {
      // if not logged in redirect to login page
      if (!user) {
        this.authenticated = false;
        this.$router.replace('/login')
      }
      // if logged in (user available)  redirect to Home
      else if (this.$route.path == '/login' || this.$route.path == '/register') {
        this.authenticated = true;
        this.$router.replace('/');
      }
    })
  },
  methods: {
    
  },
};
</script>
