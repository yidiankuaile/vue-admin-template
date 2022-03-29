<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  created() {},
};
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  /*
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  */
  /* background: $bgcolor-bg; */
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #f5f5f5;
  /* border-radius: 5px; */
}
:-webkit-scrollbar-thumb {
  background: rgba(231, 231, 231, 1);
}

.sidebar-container {
  transition: width 0.28s;
  width: 210px;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  .el-submenu__title,
  .submenu-title-noDropdown {
    background-color: #304156 !important;
    color: #fff;
  }
  .el-submenu__title:hover,
  .submenu-title-noDropdown:hover {
    background-color: #263445 !important;
  }

  .el-menu {
    border-right: none;
  }
  .el-menu .el-menu-item {
    color: #fff;
    background-color: #1f2d3d;
  }

  .el-submenu .el-menu-item:hover,
  .nest-menu .el-submenu > .el-submenu__title:hover {
    background-color: #001528 !important;
  }
  a {
    text-decoration: none;
  }
  .openSidebar & {
    width: 210px;
  }
  .hideSidebar & {
    width: 54px;
  }
}
.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: 210px;
  position: relative;
  .openSidebar & {
    margin-left: 210px;
  }
  .hideSidebar & {
    margin-left: 54px;
  }
}

.hideSidebar .menu-wrapper .el-menu-item.submenu-title-noDropdown span,
.hideSidebar .menu-wrapper .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>
