<template>
	<div class="vip-club">
		<div class="tab-header">
			<header>阅读</header>
			<ul class="tab-ul">
				<li v-for="(v,i) in headerList" @click="change(i)" class="" :class="{'current':num==i}">
					<img :src="v.imgPath">
					<p>{{v.title}}</p>
				</li>
			</ul>
		</div>
		<component :is="msg"></component>
		<v-footer></v-footer>
	</div>
</template>

<script>
import daily from '../vib-club/daily.vue';
import selects from '../vib-club/selects.vue';
import post from '../vib-club/post.vue'
export default{
	data(){
		return{
			num:0,
			msg:'daily',
			"headerList":[
				{
					"imgPath":"../../../img/3438afe88e7e047b62b2c2b79b7885f1.png",
					"title":"日常",
					"templatePath":"daily"
				},
				{
					"imgPath":"../../../img/9bd174029791f8162cc4cec53cec8951.png",
					"title":"帮你挑",
					"templatePath":"selects"
				},
				{
					"imgPath":"../../../img/866ff5f51c7c2c214984432b94fe122c.png",
					"title":"涨姿势",
					"templatePath":"post"
				}
			]
		}
	},
	methods:{
		change(a){
			this.num=a;
			this.msg=this.headerList[a].templatePath;
		}
	},
	components:{
		'daily':daily,
		'selects':selects,
		'post':post
	},
}
</script>

<style scoped="">
.current{
	background: #dcecff !important;
}
.vip-club{
	padding-top: 105px;
	padding-bottom: 50px;
}
.vip-club .tab-header{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
}
.vip-club header{
	width: 100%;
	height: 50px;
	line-height: 50px;
	background: #fff;
	font-size: 1.4rem;
	border-bottom: 1px solid #e5e5e5;
	text-align: center;
}
.vip-club ul::after{
	content: '';
	display: block;
	clear: both;
}
.vip-club ul li{
	float: left;
	width: 33.3333%;
	text-align: center;
	padding: 5px 0;
    background: #f4f7fb;
}
.vip-club ul img{
	width: 20px;
	height: 20px;
}
</style>