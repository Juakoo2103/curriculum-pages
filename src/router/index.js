import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomeView,
    },
    {
      path: "/joaquin",
      name: "joaquin",
      component: () => import("@/views/JoaquinView.vue"),
    },
    {
      path: "/luis",
      name: "luis",
      component: () => import("@/views/LuisView.vue"),
    },
    {
      path: "/jose",
      name: "jose",
      component: () => import("@/views/JoseView.vue")
    }
    /* {
      path: "/gaby",
      name: "gaby",
      component: () => import("@/views/gabyView.vue"),
    },
    {
      path: "/Ignacio",
      name: "ignacio",
      component: () => import("@/views/IgnacioView.vue"),
    }, */
  ],
});

export default router;
