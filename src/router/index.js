import Vue from 'vue';
import Router from 'vue-router';

import main from '@/app/main/routes';
import blog from '@/app/blog/routes';
import shop from '@/app/shop/routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...main,
    ...blog,
    ...shop,
  ],
});
