<template>
	<div class="footer">
		<ul>
			<li v-for="(v,i) in list" :key={i}>
				<router-link :to="v.jump">
					<img :src="v.path" class="footer-path">
					<img :src="v.pathChange" class="footer-pathchange">
					<p>{{v.title}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						title:'首页',
						jump:'/index',
						path:'./img/cbe18f26c31f5404fbeaab859dc3948b.png',
						pathChange:'./img/0e7abd1e2ebd62b348001a66ce1e0cc7.png'
					},
					{
						title:'分类',
						jump:'/sort',
						path:'./img/02df1daf1897900d498b13e5909d9a72.png',
						pathChange:'./img/db9e675a883fe07000204d85764f3813.png'
					},
					{
						title:'VIP俱乐部',
						jump:'/vipclub',
						path:'./img/09ff4dc0f8f83728fa3de822c017af09.png',
						pathChange:'./img/52d84e49751d17308f6047042091193e.png'
					},
					{
						title:'购物车',
						jump:'/shoppingcar',
						path:'./img/99b6992fdf05661a3dd293050c7823d9.png',
						pathChange:'./img/b435cdac3a3e4c15448f733738322c20.png'
					},
					{
						title:'我的',
						jump:'/my',
						path:'./img/5b67aa4fa06af643760d1ed79a3efbbe.png',
						pathChange:'./img/3084f179adb0cabace79d95d745a57aa.png'
					}
				],
				num:0,
			}
		}
	}
</script>

<style>
.footer .router-link-active{
	color: #ff4f39 !important;
}
.router-link-active .footer-path{
	display: none;
}
.router-link-active .footer-pathchange{
	display: inline;
}
.footer-path{
	display: inline;
}
.footer-pathchange{
	display: none;
}
.footer{
	width: 100%;
	height: 50px;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 888;
	background: #fff;
	box-shadow: 1px 0 1px 1px #e5e5e5;
	border-top: 1px solid #e5e5e5;
}
.footer>ul{
	width: 100%;
	display: flex;
	justify-content: center;
	text-align: center;
}
.footer>ul>li{
	width: 20%;
	padding: 5px 0;
}
.footer>ul>li a{
	color: rgba(60,67,71,.5);
}
.footer>ul>li img{
	width: 25px;
}
.footer>ul>li p{
	line-height: 15px;
}
</style>