import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Home from "../views/Home";

let routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
