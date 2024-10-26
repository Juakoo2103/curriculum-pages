import { createRouter, createWebHistory } from "vue-router";
import CurriculumVitae from "../components/CurriculumVitae.vue";

const routes = [
  {
    path: "/",
    name: "resumen",
    component: CurriculumVitae,
  },
  {
    path: "/experiencia",
    name: "experiencia",
    component: CurriculumVitae,
  },
  {
    path: "/educacion",
    name: "educacion",
    component: CurriculumVitae,
  },
  {
    path: "/habilidades",
    name: "habilidades",
    component: CurriculumVitae,
  },
  {
    path: "/contacto",
    name: "contacto",
    component: CurriculumVitae,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
