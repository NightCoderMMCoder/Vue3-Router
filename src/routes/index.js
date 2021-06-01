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
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    alias: "/about-us",
  },
  // {
  //   path: "/about-us",
  //   redirect: "/about",
  // },
  {
    path: "/user/:userId",
    component: UserHome,
    props: true,
    children: [
      {
        path: "",
        name: "UserProfile",
        component: UserProfile,
      },
      {
        path: "posts",
        name: "UserPosts",
        component: UserPosts,
      },
      {
        path: "account",
        name: "UserAccount",
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
