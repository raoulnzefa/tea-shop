import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const data = {
  productsLoadingStatus: '',
  products: [],
  categoriesLoadingStatus: '',
  categories: [],
};

export default {
  state: data,
  getters,
  mutations,
  actions,
};
