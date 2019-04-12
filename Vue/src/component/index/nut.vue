<template>
	<div class="index-subpage">
		<div v-if="flag">
			<loading></loading>
		</div>
		<div class="index-subpage-content">
			<ul>
				<li v-for="(v,i) in productArr">
					<img :src="v.imgPath">
					<p class="title texthidden">{{v.title}}</p>
					<p class="subtitle">{{v.subtitle}}</p>
					<div class="content-footer">
						¥<span>{{v.price}}<del>{{v.delPrice}}</del></span>
						<div class="buy-btn" @click="addProduct()"></div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
export default{
	data(){
		return{
			bannerArr:new Object,
			productArr:new Object,
			flag:true
		}
	},
	methods:{
		addProduct(){
			
		}
	},
	mounted(){
		setTimeout(()=>{
			var _this=this
			this.$http.get('./data/index.json')
			  .then(function (response) {
			    _this.bannerArr=response.data.result.nutList.bannerArr;
				_this.productArr=response.data.result.nutList.productArr;
				_this.flag=false;
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