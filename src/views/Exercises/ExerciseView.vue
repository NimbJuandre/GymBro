<template>
  <div>
    <v-app-bar fixed app elevation="10" color="white">
      <v-btn icon>
        <router-link class="routerlink" to="/Exercises">
          <v-icon>mdi-arrow-left</v-icon>
        </router-link>
      </v-btn>
      <v-toolbar-title>Name</v-toolbar-title>
      <v-spacer></v-spacer>     
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title @click=CreateExercise>Create Exercise</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    
  </div>
</template>
<script>
import { default as exercisesObj } from "./exerciseStore";
export default {
  name: "Exercise",
  data: () => ({
    selectedItem: 1,
    items: exercisesObj
  }),
  methods: {
    SelectExercise(ExerciseName) {
      this.$router.push({ path: '/Exercise', params: { type: ExerciseName } })
    },
    CreateExercise() {

    }
  },
};
</script>