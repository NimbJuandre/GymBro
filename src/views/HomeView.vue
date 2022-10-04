<template>
  <v-app>
    <v-speed-dial v-model="fab" elevation="5" direction="top" transition="slide-y-reverse-transition" absolute bottom right>
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab"> mdi-close </v-icon>
          <v-icon v-else> mdi-image </v-icon>
        </v-btn>
      </template>
      <v-btn @click.stop="GenerateWorkout()" fab large title="Generate Workout">
        <v-icon>mdi-arm-flex</v-icon>
      </v-btn>
      <v-btn fab large title="Capture Workout">
        <v-icon>mdi-notebook</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-app>
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
      this.$router.push('/generate');
    }
  }
};
</script>
