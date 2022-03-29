import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

/* Layout */
// 含左目录栏
import LayoutView from "@/layout/LayoutView";
// import PageView from "@/layout/PageView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("@/views/user/LoginView"),
  },
  {
    path: "/",
    component: LayoutView,
    redirect: "/dashboard",
    meta: { title: "Dashboard", icon: "data-analysis" },
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/Index"),
        name: "Dashboard",
        meta: { title: "我的面板", icon: "data-analysis" },
      },
    ],
  },
  // {
  //   path: "/post",
  //   component: Layout,
  //   meta: { title: "文章", icon: "reading" },
  //   children: [
  //     {
  //       path: "list",
  //       component: () => import("@/views/post/list"),
  //       name: "postList",
  //       meta: { title: "文章列表", icon: "reading" }
  //     },
  //     {
  //       path: "list",
  //       component: () => import("@/views/post/category-list"),
  //       name: "postList",
  //       meta: { title: "文章分类", icon: "reading" }
  //     }
  //   ]
  // },
  {
    path: "/system",
    component: LayoutView,
    meta: { title: "系统管理", icon: "setting" },
    children: [
      {
        path: "settings",
        component: () => import("@/views/system/Settings"),
        name: "systemSettings",
        meta: { title: "系统设置", icon: "s-tools" },
      },
      {
        path: "info",
        component: () => import("@/views/system/Info"),
        name: "systemInfo",
        meta: { title: "系统信息", icon: "info" },
      },
    ],
  },
  {
    path: "/external-link",
    component: LayoutView,
    meta: { title: "外部链接", icon: "discount" },
    children: [
      {
        path: "https://www.baidu.com",
        name: "baiduCom",
        meta: { title: "百度", icon: "link" },
      },
      {
        path: "https://github.com",
        name: "githubCom",
        meta: { title: "Github", icon: "link" },
      },
    ],
  },
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
