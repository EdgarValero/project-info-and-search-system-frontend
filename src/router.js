import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/sucursals",
      name: "sucursals",
      component: () => import("./views/Sucursals.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/admin/dashboard",
      name: "dashboard",
      component: () => import("./views/admin/Dashboard.vue")
    },
    {
      path: "/admin/signin",
      name: "signin",
      component: () => import("./views/admin/SignIn-Admin.vue")
    },
    {
      path: "/products",
      name: "products",
      component: () => import("./views/Products.vue")
    },
    {
      path: "/product/:id",
      name: "single-product",
      component: () => import("./views/Single-Product.vue")
    },
    {
      path: "/products-searchs",
      name: "products-searchs",
      component: () => import("./views/Product-Search.vue")
    },
    {
      path: "/categoria/alimentos-basicos",
      name: "categoria-alimentos-basicos",
      component: () => import("./views/categories/Alimentos-Basicos.vue")
    },
    {
      path: "/categoria/dulces-y-snacks",
      name: "categoria-dulces-y-snacks",
      component: () => import("./views/categories/Dulces-y-Snacks.vue")
    },
    {
      path: "/categoria/cuidado-personal",
      name: "categoria-cuidado-personal",
      component: () => import("./views/categories/Cuidado-Personal.vue")
    },
    {
      path: "/categoria/cereales",
      name: "categoria-cereales",
      component: () => import("./views/categories/Cereales.vue")
    },
    {
      path: "/categoria/charcuteria",
      name: "categoria-charcuteria",
      component: () => import("./views/categories/Charcuteria.vue")
    },
    {
      path: "/categoria/bebidas-liquidas",
      name: "categoria-bebidas-liquidas",
      component: () => import("./views/categories/Bebidas-Liquidas.vue")
    },
    {
      path: "/categoria/bebidas-en-polvo",
      name: "categoria-bebidas-en-polvo",
      component: () => import("./views/categories/Bebidas-en-Polvo.vue")
    },
    {
      path: "/categoria/yogurts",
      name: "categoria-yogurts",
      component: () => import("./views/categories/Yogurts.vue")
    },
    {
      path: "/categoria/helados",
      name: "categoria-helados",
      component: () => import("./views/categories/Helados.vue")
    },
    {
      path: "*",
      name: "Error404NotFound",
      component: () => import("./views/404.vue")
    }
  ]
});
