<template>
  <div>
    <v-app-bar fixed app elevation="10" color="white">
      <v-toolbar-title>Exercises</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
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
    <v-list flat>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item @click="SelectExercise(item.QueryName)" v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-img class="mr-0" :src="item.ImagePath" max-width="55px" max-height="55px">
            </v-img>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.Name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
import { default as exercisesObj } from "../Exercises/exerciseStore";
export default {
  name: "Exercises",
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