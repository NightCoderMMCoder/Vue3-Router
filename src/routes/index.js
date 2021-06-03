import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Home from "../views/Home";
import ShowCase from "../views/ShowCase";
import UserHome from "../views/Users/UserHome";
import UserPosts from "../views/Users/UserPosts";
import UserAccount from "../views/Users/UserAccount";
import UserProfile from "../views/Users/UserProfile";
import PostDetails from "../views/Posts/PostDetails.vue";
import Login from "../views/Auth/Login.vue";

const requiresAuth = (_, _1, next) => {
  let user = localStorage.getItem("user");
  if (user === "null") {
    next("/");
  } else {
    next();
  }
};
const requiresGuest = (_, _1, next) => {
  let user = localStorage.getItem("user");
  console.log(typeof user);
  if (user !== "null") {
    next("/");
  } else {
    next();
  }
};

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
    beforeEnter: requiresAuth,
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
    beforeEnter: requiresAuth,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: requiresGuest,
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
