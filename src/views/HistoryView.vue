<template>
  <div>
    <v-app-bar fixed app elevation="10" color="white">
      <v-toolbar-title>History</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon title="Change to calendar view" @click="ShowCalendar">
        <v-icon>mdi-calendar</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
  
<script>

export default {
  name: "History",
  data: () => ({
  }),
  methods: {
    ShowCalendar() {

    }
  },
};
</script>
<style scoped>

</style>
  