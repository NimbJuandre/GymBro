<template>
  <v-app>
    <div class="header">
      <Header v-if="authenticated" />
    </div>
    <div class="page">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import firebase from "firebase";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header
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
<style scoped>
.header {
  height: 64px;
}
.page{
  width: 100%;
}
</style>