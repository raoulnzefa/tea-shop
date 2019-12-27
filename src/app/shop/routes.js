const routes = [
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/app/shop/pages/shop-main'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/app/shop/pages/shop-cart'),
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('@/app/shop/pages/shop-product'),
  },
];

export default routes;
