import { createRouter, createWebHistory } from "vue-router";
import BookList from "../views/BookList.vue";
import BookDetail from "../views/BookDetail.vue";
import Login from "../views/Login.vue";
import Cart from "../views/Cart.vue";
// import Orders from "../views/Orders.vue";
import LayOut from "@/views/LayOut.vue";
import UserDashboard from "@/views/UserDashboard.vue";
import Cart from "../views/Cart.vue";



const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("../views/LayOut.vue"),
    redirect: "/books",
    children: [
      {
        path: "/books",
        name: "BookList",
        component: () => import("../views/BookList.vue"),
      },
      // {
      //   path: "/books:id",
      //   name: "BookDetail",
      //   component: () => import("../views/BookDetail.vue"),
      // },
      // 动态路由配置
      {
        path: "/books/:id",
        component: () => import("../views/BookDetail.vue"),
        children: [
          {
            path: "cart",
            name: "Cart",
            component: () => import("../views/Cart.vue"),
          },
        ],

      },
      {
        path: "/user",
        component: () => import("../views/UserDashboard.vue"),
        redirect: "/user/profile",
        children: [
          {
            path: "profile",
            name: "UserProfile",
            component: () => import("../views/UserProfile.vue"),
          },
          {
            path: "setting",
            name: "UserSetting",
            component: () => import("../views/UserSetting.vue"),
          },
        ],
      },
      {
        path: "/Cart",
        name: "Cart",
        component: Cart,
      },
    ],
  },
  // {
  //   path: "/",
  //   redirect: "/login",
  // },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },



];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() {
    return { top: 0 }; // 每次切换路由时滚动到顶部
  },
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (to.path.startsWith('/cart') && !isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
