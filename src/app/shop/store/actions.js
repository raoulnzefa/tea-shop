import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_LOADING,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
} from '@/app/shop/store/types';

import { http } from '@/api';

export const actions = {
  [FETCH_PRODUCTS]: ({ commit }) => new Promise((resolve, reject) => {
    commit(FETCH_PRODUCTS_LOADING);
    http.get('/products')
      .then((response) => {
        commit(FETCH_PRODUCTS_SUCCESS, response.data);
        resolve(response);
      })
      .catch((error) => {
        commit(FETCH_PRODUCTS_ERROR);
        reject(error);
      });
  }),
  [FETCH_CATEGORIES]: ({ commit }) => new Promise((resolve, reject) => {
    commit(FETCH_CATEGORIES_LOADING);
    http.get('/categories')
      .then((response) => {
        commit(FETCH_CATEGORIES_SUCCESS, response.data);
        resolve(response);
      })
      .catch((error) => {
        commit(FETCH_CATEGORIES_ERROR);
        reject(error);
      });
  }),
};
