import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Profile",
    component: () => import('../views/ProfileView.vue'),
  },
  {
    path: "/History",
    name: "History",
    component: () => import('../views/HistoryView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Exercise',
    name: 'Exercise',
    component: () => import('../views/Exercises/ExerciseView.vue'),
  },
  {
    path: '/Exercises',
    name: 'Exercises',
    component: () => import('../views/Exercises/ExercisesView.vue'),
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
