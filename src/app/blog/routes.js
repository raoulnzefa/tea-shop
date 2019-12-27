const routes = [
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/app/blog/pages/blog-main'),
  },
  {
    path: '/blog/:id',
    name: 'blog-post',
    component: () => import('@/app/blog/pages/blog-post'),
  },
];

export default routes;
