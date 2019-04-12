import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './js/router.js'
import vfooter from './component/footer/footer.vue'
import loading from './component/loading/loading.vue'
import axios from 'axios'
import Swiper from '../node_modules/_swiper@4.5.0@swiper/dist/js/swiper.min.js'
import '../node_modules/_swiper@4.5.0@swiper/dist/css/swiper.min.css'
import './css/gm.css'
Vue.use(VueRouter);
Vue.prototype.$http = axios;

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './js/data.js'
//全局注册(底部)
Vue.component('v-footer',vfooter)
//全局注册(加载中)
Vue.component('loading',loading)


//实例对象
new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store
})
