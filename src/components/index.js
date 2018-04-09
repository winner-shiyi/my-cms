import Vue from 'vue'
import Layout from './layout/layout.vue'
import Aside from './aside/aside.vue'
import Header from './header/header.vue'
import Main from './main/main.vue'
import Footer from './footer/footer.vue'

// 注册全局组件
Vue.component('cms-layout', Layout)
Vue.component('cms-aside', Aside)
Vue.component('cms-header', Header)
Vue.component('cms-main', Main)
Vue.component('cms-footer', Footer)