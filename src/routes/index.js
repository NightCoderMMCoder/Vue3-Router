import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Home from "../views/Home";
import UserHome from "../views/Users/UserHome";
import UserPosts from "../views/Users/UserPosts";
import UserAccount from "../views/Users/UserAccount";
import UserProfile from "../views/Users/UserProfile";

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
    children: [
      {
        path: "",
        component: UserProfile,
      },
      {
        path: "posts",
        component: UserPosts,
      },
      {
        path: "account",
        component: UserAccount,
      },
    ],
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "act",
  linkExactActiveClass: "exact",
});

export default router;
