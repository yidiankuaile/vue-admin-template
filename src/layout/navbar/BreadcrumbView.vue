<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <span
        v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
        class="no-redirect"
        >{{ item.meta.title }}</span
      >
      <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { pathToRegexp } from "path-to-regexp";
export default {
  name: "BreadcrumbView",
  data() {
    return {
      levelList: null,
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    getBreadcrumb() {
      console.log(this.$route.matched);
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      // const first = matched[0];

      this.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
      console.log(this.levelList);
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      var toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    handleLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
    },
  },
  created() {
    this.getBreadcrumb();
  },
};
</script>

<style scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
.app-breadcrumb.el-breadcrumb .no-redirect {
  color: #97a8be;
  cursor: text;
}
</style>
