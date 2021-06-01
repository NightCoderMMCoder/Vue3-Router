import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Home from "../views/Home";
import UserHome from "../views/Users/UserHome";

let routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/user/:userId",
    component: UserHome,
    props: true,
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
