import Vue from 'vue';
import Vuex from 'vuex';

import search from './search';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {},
  actions: {},
  modules: {
    search,
  },
});
