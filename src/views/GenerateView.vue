<template>
    <div>
      <h1>Generate</h1>
    </div>
  </template>
<script>
import firebase from "firebase";

export default {
    name: "Generate",
    data: () => ({
        cards: [
            { title: 'Chest', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
            { title: 'Back', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
            { title: 'Arm', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
            { title: 'Shoulder', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
            { title: 'Legs', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 }
        ],
    }),
    methods: {

    },
};
</script>