import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import tagsView from "./modules/tagsView";
import user from "./modules/user";

Vue.use(Vuex);

const modules = {
  app,
  tagsView,
  user,
};

const store = new Vuex.Store({
  modules,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
