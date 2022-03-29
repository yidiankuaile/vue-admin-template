import { login } from "../../api/auth";

const state = {
  token: "",
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    const { loginname, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ loginname, password })
        .then((response) => {
          const { data } = response;
          commit("SET_TOKEN", data.token);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  // 用户登出
  logout({ commit }) {
    return new Promise((resolve) => {
      commit("SET_TOKEN", "");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
