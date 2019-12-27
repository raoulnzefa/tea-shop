const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/app/main/pages/main-home'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/app/main/pages/main-about'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/app/main/pages/main-contacts'),
  },
];

export default routes;
