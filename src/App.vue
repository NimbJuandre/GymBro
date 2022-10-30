<template>
  <v-app>
    <AppContent />
    <Footer v-if="authenticated" />
  </v-app>
</template>

<script>
import firebase from "firebase";
import AppContent from "./components/AppContent.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    AppContent,
    Footer,
  },
  data: () => ({
    authenticated: true,
  }),
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

<style>
#page {
  width: 100%;
}

.routerlink {
  text-decoration: none;
  color: inherit !important;
}
</style>