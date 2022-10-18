<template>
  <v-bottom-navigation app v-model="value">
    <v-btn value="profile">
      <router-link class="routerlink" to="/">
        <span>Profile</span>
        <v-icon>mdi-account</v-icon>
      </router-link>
    </v-btn>
    <v-btn value="history">
      <router-link class="routerlink" to="/History">
        <span>History</span>
        <v-icon>mdi-history</v-icon>
      </router-link>
    </v-btn>
    <v-btn value="log">
      <router-link class="routerlink" to="/Log">
        <span>Log</span>
        <v-icon>mdi-notebook</v-icon>
      </router-link>
    </v-btn>
    <v-btn value="exercises">
      <router-link class="routerlink" to="/Generate">
        <span>Exercises</span>
        <v-icon>mdi-arm-flex</v-icon>
      </router-link>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>

export default {
  name: "Footer",
  data: () => ({ value: 'recent' }),
};
</script>