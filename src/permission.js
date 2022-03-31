import router from "./router";
import getPageTitle from "./utils/getPageTitle";
import store from "./store";

// 白名单，不需要登录就能浏览的页面
const whiteList = ["/login", "/auth-redirect"];

router.beforeEach(async (to, from, next) => {
  document.title = getPageTitle(to.meta.title);

  const hasToken = store.state.user.token;

  if (hasToken) {
    console.log("to.path", to.path);
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    console.log("to.path", to.path);
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
