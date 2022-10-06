<template>
  <div>
    <v-speed-dial v-model="fab" elevation="5" direction="top" transition="slide-y-reverse-transition" absolute bottom
      right>
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab"> mdi-close </v-icon>
          <v-icon v-else> mdi-image </v-icon>
        </v-btn>
      </template>
      <v-btn fab large title="Generate Workout">
        <router-link class="routerlink" to="/Generate">
          <v-icon>mdi-arm-flex</v-icon>
        </router-link>
      </v-btn>
      <v-btn fab large title="Capture Workout">
        <router-link class="routerlink" to="/Log">
          <v-icon>mdi-notebook</v-icon>
        </router-link>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  data: () => ({
    fab: false,
  }),
  components: {
    HelloWorld,
    Header
  },
  methods: {
    GenerateWorkout() {
      this.$router.push('/Generate');
    },
    LogWorkout() {
      this.$router.push('/Log');
    }
  }
};
</script>
<style scoped>
.routerlink {
  text-decoration: none;
  color: inherit;
}
</style>
