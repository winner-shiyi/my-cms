const routes = [
  {
    path: '/',
    name: 'index',
    // 用来表示改页面是否需要登录
    meta: { requiresAuth: true },
    component: resolve => require(['../../views/index/index.vue'], resolve),
  },
  {
    path: '/home',
    name: 'home',
    // ????
    meta: { requiresAuth: true },
    component: resolve => require(['../../views/home/home.vue'], resolve),
  },
]

export default routes
