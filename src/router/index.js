import Vue from "vue";
import VueRouter from "vue-router";
import ProfileView from "../views/ProfileView.vue";
import HistoryView from "../views/HistoryView.vue";
import GenerateView from "../views/GenerateView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/History",
    name: "History",
    component: HistoryView,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Generate',
    name: 'Generate',
    component: GenerateView,
  },
  {
    path: '/Log',
    name: 'Log',
    component: () => import('../views/LogView.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
