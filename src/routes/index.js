import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Home from "../views/Home";
import ShowCase from "../views/ShowCase";
import UserHome from "../views/Users/UserHome";
import UserPosts from "../views/Users/UserPosts";
import UserAccount from "../views/Users/UserAccount";
import UserProfile from "../views/Users/UserProfile";
import PostDetails from "../views/Posts/PostDetails.vue";

let routes = [
  {
    path: "/",
    name: "Home",
    // component: Home,
    components: {
      default: Home,
      showCase: ShowCase,
    },
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
    path: "/posts/:postId",
    name: "PostDetails",
    component: PostDetails,
  },
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
  // scrollBehavior(_, _1, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   return { top: 0 };
  // },
});

export default router;
