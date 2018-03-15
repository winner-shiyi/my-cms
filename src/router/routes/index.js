const routes = [
  {
    path: '/',
    // 用来表示改页面是否需要登录
    meta: { requiresAuth: true },
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    // 用来表示改页面是否需要登录
    meta: { requiresAuth: true },
    component: resolve => require(['../../views/login/index.vue'], resolve),
  },
  {
    path: '/home',
    name: 'home.index',
    component: resolve => require(['../../views/router-view.vue'], resolve),
    children: [
      {
        path: '/',
        name: 'home.index',
        component: resolve => require(['../../views/home/index.vue'], resolve),
      },
      {
        path: 'create',
        name: 'home.create',
        component: resolve => require(['../../views/home/create.vue'], resolve),
      },
      {
        path: 'edit',
        name: 'home.edit',
        component: resolve => require(['../../views/home/edit.vue'], resolve),
      },
    ],
  },
]

export default routes
