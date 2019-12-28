import Vue from 'vue';
import Vuex from 'vuex';

import shop from '@/app/shop/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shop,
  },
});
