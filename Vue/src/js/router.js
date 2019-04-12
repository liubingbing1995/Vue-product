import VueRouter from 'vue-router';

import index from '../component/index/index.vue'
import sort from '../component/footer/sort.vue'
import vipclub from '../component/footer/vipclub.vue'
import shoppingcar from '../component/footer/shoppingcar.vue'
import my from '../component/footer/my.vue'
import search from '../component/data-list/search.vue'
import newcomer from '../component/activity/newcomer.vue'
import detai from '../component/activity/detai.vue'
import coupCenter from '../component/activity/coup-center.vue'
import checkIn from '../component/activity/check-in.vue'
import lottery from '../component/activity/lottery.vue'
import vipCenter from '../component/user-center/vip-center.vue'
import giftBagproduct from '../component/data-list/giftBagproduct.vue'
import hotSaleproduct from '../component/data-list/hotSaleproduct.vue'
import sortProduct from '../component/data-list/sortProduct.vue'
export default new VueRouter({
	routes:[
		{
			path:'*',
			redirect:'/index'
		},
		{
			path:'/index',
			component:index,
		},
		{
			path:'/sort',
			component:sort
		},
		{
			path:'/vipclub',
			component:vipclub
		},
		{
			path:'/shoppingcar',
			component:shoppingcar
		},
		{
			path:'/my',
			component:my
		},
		{
			path:'/data-list/search',
			component:search
		},
		{
			path:'/activity/newcomer',
			component:newcomer
		},
		{
			path:'/activity/detai',
			component:detai
		},
		{
			path:'/activity/coup-center',
			component:coupCenter
		},
		{
			path:'/activity/check-in',
			component:checkIn
		},
		{
			path:'/activity/lottery',
			component:lottery
		},
		{
			path:'/user-center/vip-center',
			component:vipCenter
		},
		{
			path:'/data-list/giftBagproduct',
			component:giftBagproduct
		},
		{
			path:'/data-list/hotSaleproduct',
			component:hotSaleproduct
		},
		{
			path:'/data-list/sortProduct',
			component:sortProduct
		}
	]
})