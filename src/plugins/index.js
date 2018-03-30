import Vue from 'vue'
import VueRouter from 'vue-router'
import Api from '../api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Api)
Vue.use(infiniteScroll)
