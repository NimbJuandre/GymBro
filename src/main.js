import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from 'firebase/app';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const firebaseConfig = {
  apiKey: "AIzaSyCL3KtIUEXgJfNBsNZ_IhIeo_Y4AHWt8JE",
  authDomain: "gymbro-61f80.firebaseapp.com",
  projectId: "gymbro-61f80",
  storageBucket: "gymbro-61f80.appspot.com",
  messagingSenderId: "867847316932",
  appId: "1:867847316932:web:9f9f65d5dda799bef33091"
};

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
