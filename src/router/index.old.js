import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  // linkActiveClass: 'active', // 当前路由的active
  routes: [
    // {
    //   path: '/',
    //   redirect: '/goods'   // 当访问根目录的时候默认跳转到主页
    // },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
