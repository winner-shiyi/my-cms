import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({
  // history不是哈希模式的url
  mode: 'history',
  routes,
})

export default router
