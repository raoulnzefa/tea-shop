import {
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_CATEGORIES_LOADING,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
} from '@/app/shop/store/types';

export const mutations = {
  [FETCH_PRODUCTS_LOADING]: (state) => {
    state.productsLoadingStatus = 'loading';
  },
  [FETCH_PRODUCTS_ERROR]: (state) => {
    state.productsLoadingStatus = 'error';
  },
  [FETCH_PRODUCTS_SUCCESS]: (state, payload) => {
    state.productsLoadingStatus = 'success';
    state.products = payload;
  },
  [FETCH_CATEGORIES_LOADING]: (state) => {
    state.categoriesLoadingStatus = 'loading';
  },
  [FETCH_CATEGORIES_ERROR]: (state) => {
    state.categoriesLoadingStatus = 'error';
  },
  [FETCH_CATEGORIES_SUCCESS]: (state, payload) => {
    state.categoriesLoadingStatus = 'success';
    state.categories = payload;
  },
};
