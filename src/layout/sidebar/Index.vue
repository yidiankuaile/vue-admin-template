<template>
  <div class="side-bar">
    <el-scrollbar>
      <el-menu
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :item="route"
          :key="route.path"
          :base-path="route.path"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem";
export default {
  name: "SidebarView",
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  components: {
    SidebarItem,
  },
};
</script>
