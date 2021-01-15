import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/admin",
    name: "Admin",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin.vue")
  },
  {
    path: "/matching",
    name: "Matching",
  
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Matching.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
