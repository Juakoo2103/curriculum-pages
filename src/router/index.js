import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Joaquin",
      name: "joaquin",
      component: () => import("@/views/JoaquinView.vue"),
    },
    /* {
      path: "/Luis",
      name: "luis",
      component: () => import("@/views/LuisView.vue"),
    },
    {
      path: "/gaby",
      name: "gaby",
      component: () => import("@/views/gabyView.vue"),
    },
    {
      path: "/Jose",
      name: "jose",
      component: () => import("@/views/JoseView.vue"),
    },
    {
      path: "/Ignacio",
      name: "ignacio",
      component: () => import("@/views/IgnacioView.vue"),
    }, */
  ],
});

export default router;
