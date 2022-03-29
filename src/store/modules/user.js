// import { login, logout, me } from "../../api/auth";
// import { setToken, getToken, removeToken } from "../../utils/auth";
const state = {
  // token: getToken(),
  // avatar: "",
  // roles: [],
};

const mutations = {
  // SET_TOKEN: (state, token) => {
  //   state.token = token;
  // },
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar;
  // },
  // SET_ROLES: (state, avatar) => {
  //   state.avatar = avatar;
  // },
};

const actions = {
  // // 用户登录
  // login({ commit }, userInfo) {
  //   const { loginname, password } = userInfo;
  //   return new Promise((resolve, reject) => {
  //     login({ loginname, password })
  //       .then((response) => {
  //         const { data } = response;
  //         commit("SET_TOKEN", data.token);
  //         setToken(data.token);
  //       })
  //       .then(() => {
  //         // 获取我的用户信息
  //         me().then((res) => {
  //           const resData = res.data;
  //           commit("SET_AVATAR", resData.avatar);
  //           commit("SET_ROLES", resData.role);
  //           resolve();
  //         });
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });
  // },
  // // 用户登出
  // logout({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     logout(state.token)
  //       .then(() => {
  //         commit("SET_TOKEN", "");
  //         commit("SET_AVATAR", "");
  //         commit("SET_ROLES", []);
  //         removeToken();
  //         resolve();
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });
  // },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
