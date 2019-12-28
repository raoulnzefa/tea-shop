import {
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from '@/app/shop/store/types';

export const mutations = {
  [FETCH_PRODUCTS_LOADING]: (state) => {
    state.productsLoadingStatus = 'loading';
  },
  [FETCH_PRODUCTS_ERROR]: (state) => {
    state.productsLoadingStatus = 'error';
  },
  [FETCH_PRODUCTS_SUCCESS]: (state, payload) => {
    state.products = payload;
  },
};
