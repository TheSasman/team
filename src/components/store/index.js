import { createStore } from 'vuex';

const store = createStore({
  state: {
    // Define tu estado inicial aquí
    count: 0
  },
  mutations: {
    // Define tus mutaciones aquí
    increment(state) {
      state.count++;
    }
  },
  actions: {
    // Define tus acciones aquí
    increment({ commit }) {
      commit('increment');
    }
  },
  getters: {
    // Define tus getters aquí
    getCount: (state) => state.count
  }
});

export default store;

