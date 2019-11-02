import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import { isAuthenticated, isNotAuthenticated } from "./utils/auth.js";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: isNotAuthenticated
    },
    {
      path: "/sucursales",
      name: "sucursals",
      component: () => import("./views/Sucursals.vue"),
      beforeEnter: isNotAuthenticated
    },
    {
      path: "/admin/dashboard",
      name: "dashboard",
      component: () => import("./views/admin/Dashboard.vue"),
      beforeEnter: isAuthenticated
    },
    {
      path: "/admin/signin",
      name: "signin",
      component: () => import("./views/admin/SignInAdmin.vue"),
      beforeEnter: isNotAuthenticated
    },
    {
      path: "/productos",
      name: "products",
      component: () => import("./views/Products.vue"),
      beforeEnter: isNotAuthenticated
    },
    {
      path: "/productos-buscados/:searchProduct",
      name: "products-searchs",
      component: () => import("./views/ProductSearch.vue"),
      beforeEnter: isNotAuthenticated
    },
    {
      path: "/categoria/alimentos-basicos",
      name: "categoria-alimentos-basicos",
      component: () => import("./views/categories/AlimentosBasicos.vue"),
      beforeEnter: isNotAuthenticated
    },
    {
      path: "/categoria/dulces-y-snacks",
      name: "categoria-dulces-y-snacks",
      component: () => import("./views/categories/DulcesSnacks.vue"),
      beforeEnter: isNotAuthenticated
    },
    {
      path: "/categoria/cuidado-personal",
      name: "categoria-cuidado-personal",
      component: () => import("./views/categories/CuidadoPersonal.vue"),
      beforeEnter: isNotAuthenticated
    },
    {
      path: "/categoria/cereales",
      name: "categoria-cereales",
      component: () => import("./views/categories/Cereales.vue"),
      beforeEnter: isNotAuthenticated
    },
    {
      path: "/categoria/charcuteria",
      name: "categoria-charcuteria",
      component: () => import("./views/categories/Charcuteria.vue"),
      beforeEnter: isNotAuthenticated
    },
    {
      path: "/categoria/bebidas-liquidas",
      name: "categoria-bebidas-liquidas",
      component: () => import("./views/categories/BebidasLiquidas.vue"),
      beforeEnter: isNotAuthenticated
    },
    {
      path: "/categoria/bebidas-en-polvo",
      name: "categoria-bebidas-en-polvo",
      component: () => import("./views/categories/BebidasEnPolvo.vue"),
      beforeEnter: isNotAuthenticated
    },
    {
      path: "/categoria/yogurts",
      name: "categoria-yogurts",
      component: () => import("./views/categories/Yogurts.vue"),
      beforeEnter: isNotAuthenticated
    },
    {
      path: "/categoria/helados",
      name: "categoria-helados",
      component: () => import("./views/categories/Helados.vue"),
      beforeEnter: isNotAuthenticated
    },
    {
      path: "*",
      name: "Error404NotFound",
      component: () => import("./views/404.vue"),
      beforeEnter: isNotAuthenticated
    }
  ]
});
