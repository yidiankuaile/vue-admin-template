import { setSidebarStatus, getSidebarStatus } from "../../utils/sidebar";
const state = {
  sidebar: {
    opened: getSidebarStatus() ? !!+getSidebarStatus() : true,
  },
};

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened;
    if (state.sidebar.opened) {
      setSidebarStatus(1);
    } else {
      setSidebarStatus(0);
    }
  },
};

const actions = {
  // 用户登录
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
