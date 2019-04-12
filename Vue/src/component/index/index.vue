<template>
	<div id="index-box">
		<div class="index-nav">
			<header>
				<router-link to="/data-list/search" class="search fr">
					<img src="../../../img/icon_search_2.png">
				</router-link>
			</header>
			<div class="swiper-container nav-swiper">
				<ul class="swiper-wrapper">
					<li :class="['swiper-slide',num==i?'nav-swiper-active':'']" v-for="(v,i) in result.navList" :key='i' @click="change(i)">
						<span>{{v.title}}</span>
					</li>
				</ul>
			</div>
		</div>
		<keep-alive>
			<component :is="msg"></component>
		</keep-alive>
		<v-footer></v-footer>
	</div>
</template>

<script>
/*导航*/
import Swiper from 'swiper';
import recommend from './recommend.vue';
import nut from './nut.vue';
import driedFruit from './driedfruit.vue';
import meat from './meat.vue';
import giftBox from './giftbox.vue';
import candies from './candies.vue';
import driedBean from './driedbean.vue';
export default{
	name: 'test-keep-alive',
	data(){
		return{
			result:new Object,
			num:0,
			msg:'recommend',
			includedComponents: "test-keep-alive"
		}
	},
	methods:{
		change(a){
			this.num=a;
			this.msg=this.result.navList[a].templatePath;
		}
	},
	mounted(){
		var _this=this
		this.$http.get('data/index.json')
		  .then(function (response) {
		    _this.result=response.data.result;
			_this.$nextTick(function(){
					var navswiper=new Swiper ('.nav-swiper', {
					slidesPerView:4.5,
				    loop:false,
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
					observeParents:true,//修改swiper的父元素时，自动初始化swiper
				})
			})
		  })
		  .catch(function (error) {
		    console.log(error);
		  })
		  .then(function () {
		    // always executed
		  });  
	},
	components:{
		'recommend':recommend,
		'nut':nut,
		'driedFruit':driedFruit,
		'meat':meat,
		'giftBox':giftBox,
		'candies':candies,
		'driedBean':driedBean
	}
}
/*导航*/

</script>

<style>
#index-box{
	height: 100%;
	padding-top: 82px;
}
.index-nav{
	width: 100%;
    height: 82px;
    background-color: #fff;
    overflow: hidden;
    border-bottom: 1px solid #e8e8e8;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 888;
}
.index-nav>header{
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 45px;
	padding: 0 1rem;
	z-index: 888;
	line-height: 45px;
	background-color: #fff;
	background-image: url(../../../img/icon_logo.png);
	background-repeat: no-repeat;
	background-size: 15%;
	background-position: 50%;
}
.search{
	display: block;
	width: 2rem;
	height: auto;
}
.nav-swiper{
	text-align: center;
}
.nav-swiper span{
	font-size: 1.3rem;
}
.nav-swiper li{
	border-top: 2px solid #ebecec;
}
.nav-swiper .nav-swiper-active{
	border-top: 2px solid #ff4f39;
    color: #ff4f39;
}
.nav-swiper .swiper-slide{
	padding: 0 5px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 1.4rem;
    overflow: hidden;
}
.activity ul{
	display: flex;
	justify-content: center;
	background-color: #fff;
	text-align: center;
	padding: 8px 0;
    overflow: hidden;
}
.activity ul li{
	width: 25%;
	margin: 5px 0;
}
.activity img{
	width: 4rem;
    height: auto;
}
.activity p{
	padding-top: 5px;
}
.index-subpage{
	padding-bottom: 50px;
}
.index-subpage .banner-swiper{
	margin-bottom: 10px;
}
.index-subpage-content ul{
	padding: 0 2%;
	background: #fff;
}
.index-subpage-content ul::after{
	content: '';
	display: block;
	clear: both;
}
.index-subpage-content ul li{
	float: left;
	position: relative;
	width: 49%;
	margin-top: 10px;
	padding-bottom: 10px;
}
.index-subpage-content ul li:nth-child(2n-1){
	margin-right: 1%;
}
.index-subpage-content ul li:nth-child(2n){
	margin-left: 1%;
}
.index-subpage-content .title{
	height: 2.4rem;
    line-height: 2.4rem;
    font-size: 1.3rem;
    font-weight: 700;
}
.index-subpage-content .subtitle{
	color: #333;
    margin: 0 3%;
    height: 3rem;
    line-height: 1.5rem;
    overflow: Hidden;
}
.index-subpage .index-subpage-content .content-footer{
	color: #ff4f39;
    font-size: 1.4rem;
    height: 2.2rem;
    line-height: 2.2rem;
}
.index-subpage .index-subpage-content span{
	color: #ff4f39;
    font-size: 1.5rem;
}
.index-subpage .index-subpage-content .buy-btn{
	position: absolute;
    bottom: 6px;
    right: 3%;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    color: #ff4f39;
    border-radius: 30px;
    background: url(../../../img/下载.png) no-repeat;
    background-size: 90% 90%;
}
</style>