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
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    alias: "/about-us",
    meta: {
      title: "About",
    },
  },
  // {
  //   path: "/about-us",
  //   redirect: "/about",
  // },
  {
    path: "/posts/:postId",
    name: "PostDetails",
    component: PostDetails,
    // beforeEnter: requiresAuth,
    meta: {
      title: "PostDetails",
    },
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
        meta: {
          title: "UserProfile",
        },
      },
      {
        path: "posts",
        name: "UserPosts",
        component: UserPosts,
        meta: {
          title: "UserPosts",
        },
      },
      {
        path: "account",
        name: "UserAccount",
        component: UserAccount,
        meta: {
          title: "UserAccount",
        },
      },
    ],
    // beforeEnter: requiresAuth,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    // beforeEnter: requiresGuest,
    meta: {
      requiresGuest: true,
      title: "Login",
    },
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

router.beforeEach((to, _, next) => {
  document.title = to.meta.title;
  let user = localStorage.getItem("user");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (user === "null") {
      next("/");
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (user === "null") {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
