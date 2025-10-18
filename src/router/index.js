import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Inicio - Mi Portafolio",
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
  // Comportamiento de scroll - importante para navegación suave
  scrollBehavior(to, from, savedPosition) {
    // Si hay un hash en la URL (ej: #about)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80, // Offset para el navbar
      };
    }
    // Si hay una posición guardada (botón atrás del navegador)
    if (savedPosition) {
      return savedPosition;
    }
    // Por defecto, scroll al top
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

// Guard de navegación para actualizar el título de la página
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Mi Portafolio";
  next();
});

export default router;
