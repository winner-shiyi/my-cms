import Vue from 'vue'
import Layout from './layout/main.vue'
import Aside from './aside/main.vue'
import Header from './header/main.vue'
import Main from './main/main.vue'
import Footer from './footer/main.vue'

Vue.component('cms-layout', Layout)
Vue.component('cms-aside', Aside)
Vue.component('cms-header', Header)
Vue.component('cms-main', Main)
Vue.component('cms-footer', Footer)