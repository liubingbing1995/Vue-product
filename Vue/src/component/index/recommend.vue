<template>
	<div class="recommend">
		<div v-if="flag">
			<loading></loading>
		</div>
		<div class="swiper-container banner-swiper">
			<ul class="swiper-wrapper">
				<li class="swiper-slide" v-for="(v,i) in result.bannerSwiperlist">
					<router-link :to="v.jumpPath">
						<img :src="v.imgPath">
					</router-link>
				</li>
			</ul>
			<div class="swiper-pagination"></div>
		</div>
		<div class="activity">
			<ul class="model_m2" v-if="!flag">
				<li v-for="(v,i) in result.activityList">
					<router-link :to="v.jumpPath">
						<img :src="v.imgPath">
						<p>{{v.title}}</p>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="newcomer" v-if="!flag">
			<router-link to="/activity/newcomer">
				<img src="../../../img/4c01e763bd11c66dec5cecbd7f987ceb.jpg">
			</router-link>
		</div>
		<div class="module-title" v-if="!flag">
			<b class="vertical-line"></b>礼盒礼包<em class="slash">/</em><span class="subtitle">零食大礼限时抢</span>
		</div>
		<div class="swiper-container recommend-product">
			<ul class="swiper-wrapper">
				<li class="swiper-slide pro-li" v-for="(v,i) in result.giftBagswiperList">
					<router-link to="/data-list/giftBagproduct">
						<img :src="v.imgPath" class="pro-img">
						<p class="pro-title texthidden">{{v.title}}</p>
						<p class="pro-price">
							{{v.price}}
							<del>{{v.delPrice}}</del>
						</p>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="module-title" v-if="!flag">
			<b class="vertical-line"></b>热卖爆款<em class="slash">/</em><span class="subtitle">超低价格</span>
		</div>
		<div class="hot-sale" v-if="!flag">
			<ul>
				<li v-for="(v,i) in result.hotSalelist">
					<router-link to="/data-list/hotSaleproduct">
						<img :src="v.imgPath">
						<div>
							<p class="name texthidden">{{v.title}}</p>
							<p class="desc">{{v.desc}}</p>
							<p class="price">
								{{v.price}} 
								<del>{{v.delPrice}}</del>
							</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="recommend-content" v-for="(v,i) in result.recommendContentList">
			<div class="category-title">
				<img :src="v.cotegoryTitle">
			</div>
			<div class="swiper-container recommend-product">
				<ul class="swiper-wrapper">
					<li class="swiper-slide pro-li" v-for="(vv,ii) in v.arr1">
						<router-link to="/data-list/giftBagproduct">
							<img :src="vv.imgPath" class="pro-img">
							<p class="pro-title texthidden">{{vv.title}}</p>
							<p class="pro-price">
								{{vv.price}}
								<del>{{vv.delPrice}}</del>
							</p>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="swiper-container recommend-product">
				<ul class="swiper-wrapper">
					<li class="swiper-slide pro-li" v-for="(vv,ii) in v.arr2">
						<router-link to="/data-list/giftBagproduct">
							<img :src="vv.imgPath" class="pro-img">
							<p class="pro-title texthidden">{{vv.title}}</p>
							<p class="pro-price">
								{{vv.price}}
								<del>{{vv.delPrice}}</del>
							</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
export default{
	data(){
		return{
			flag:true,
			result:new Object
		}
	},
	methods: {
		
	},
	mounted(){
		setTimeout(()=>{
			var _this=this
			this.$http.get('./data/indexRecommend.json')
			  .then(function (response) {
				_this.flag=false;
				_this.result=response.data.result;
				cache:false
				_this.$nextTick(function(){
					var bannerswiper=new Swiper ('.banner-swiper',{
						pagination: {
							el: '.swiper-pagination',
							clickable: true,
						},
						loop:true,
						autoplay : {
							delay:4000,//延时器 
							disableOnInteraction: false,//点击按钮不会停止定时器
						},
						observer:true,//修改swiper自己或子元素时，自动初始化swiper
						observeParents:true,//修改swiper的父元素时，自动初始化swiper
					})
					var giftBagswiper=new Swiper ('.recommend-product',{
						slidesPerView:2.6,
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
		},500)
	}
}
</script>

<style>
.recommend{
	padding-bottom: 50px;
}
.recommend .activity ul{
	display: flex;
	justify-content: center;
	background-color: #fff;
	text-align: center;
	padding: 8px 0;
    overflow: hidden;
}
.recommend .activity ul li{
	width: 25%;
	margin: 5px 0;
}
.recommend .activity img{
	width: 4rem;
    height: auto;
}
.recommend .activity p{
	padding-top: 5px;
}
.recommend .module-title{
	font-size: 1.4rem;
    padding-left: 5px;
    color: #000;
    background-color: #fff;
    height: 3rem;
    line-height: 3rem;
}
.recommend .vertical-line{
	border-left: 4px solid #FF4949;
	margin-right: 4px;
	border-radius: 4px;
}
.recommend .slash{
	color: #ff4f39;
    margin: 0 2px;
}
.recommend .subtitle{
	color: #ff4f39;
    font-size: 1.2rem;
}
.recommend .recommend-product{
	background: #fff;
}
.recommend .pro-li{
	text-align: center;
	padding: 15px 0 10px;
}
.recommend .pro-img{
	width: 80%;
    margin: 0 auto;
}
.recommend .pro-title{
	width: 90%;
    overflow: hidden;
    margin: 0 auto;
    padding: 10px 0 5px;
}
.recommend .pro-price{
	color: #ff4f39;
}
.recommend .hot-sale ul{
	background: #fff;
	padding-top: 3rem;
}
.recommend .hot-sale li{
	padding: 0 1rem 2rem;
    margin: 0 1rem 2rem;
    border-bottom: 1px solid #e0e0e0;
    overflow: hidden;
    position: relative;
}
.recommend .hot-sale img{
	width: 40%;
	height: 40%;
}
.recommend .hot-sale div{
    width: 50%;
    padding-left: 1rem;
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-33%,-66%);
}
.recommend .hot-sale .name{
	font-size: 1.4rem;
    font-weight: 700;
    color: #333;
    height: 3rem;
    line-height: 3rem;
}
.recommend .hot-sale .desc{
	height: 3.2rem;
    line-height: 1.6rem;
    overflow: hidden;
	color: #333;
}
.recommend .hot-sale .price{
	margin-top: 1.1rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: #ff4f39;
}
</style>

