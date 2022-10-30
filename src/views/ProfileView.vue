<template>
  <div>
    <v-app-bar fixed app elevation="10" color="white">
      <v-toolbar-title>My Profile</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon title="Click to logout" @click="Logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Profile",
  data: () => ({

  }),
  methods: {
    Logout() {
      firebase.auth().signOut();
    }
  },
};
</script>
<style scoped>

</style>
