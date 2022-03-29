const state = {
  visitedViews: [],
  cachedViews: [],
};

const mutations = {
  ADD_VISITED_VIEW: (state, view) => {
    if (state.visitedViews.some((v) => v.path === view.path)) {
      return;
    }
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || "no-name",
      })
    );
  },
  DEL_VISITED_VIEW: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1);
        break;
      }
    }
  },
};

const actions = {
  addView({ dispatch }, view) {
    dispatch("addVisitedView", view);
    // dispatch('addCachedView',view)
  },
  addVisitedView({ commit }, view) {
    commit("ADD_VISITED_VIEW", view);
  },
  delView({ dispatch }, view) {
    return new Promise((resolve) => {
      dispatch("delVisitedView", view);
      // dispatch('delCacheView',view)
      resolve({
        visitedViews: [...state.visitedViews],
        // cachedViews:[...this.state.cachedViews]
      });
    });
  },
  delVisitedView({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("DEL_VISITED_VIEW", view);
      resolve([...state.visitedViews]);
    });
  },
  delCachedView({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("DEL_CACHED_VIEW", view);
      resolve([...state.cachedViews]);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
