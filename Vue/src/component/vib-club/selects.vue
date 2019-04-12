<template>
	<div class="daily">
		<ul>
			<li v-for="(v,i) in result.selectsList">
				<router-link to="/index">
					<p class="title texthidden">{{v.title}}</p>
					<p class="subtitle">{{v.subtitle}}</p>
					<img :src="v.imgPath" class="content-img">
					<div class="content-footer">
						<span class="left">
							<img :src="v.userImgpath">{{v.userName}}
						</span>
						<span class="comments">{{v.comments}}</span>
						<span class="likes">{{v.likes}}</span>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	data(){
		return{
			result:new Object
		}
	},
	mounted(){
		var _this=this
		this.$http.get('./data/vipclub.json')
		  .then(function (response) {
		    _this.result=response.data.result
		  })
		  .catch(function (error) {
		    console.log(error);
		  })
		  .then(function () {
		    // always executed
		  });  
	}
}
</script>

<style>
.daily li{
	background: #fff;
    margin-bottom: 10px;
    padding: 5px 3%;
}
.daily .title{
	padding: 3px 2rem 7px 0;
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 2rem;
	color: #4a4a4a;
}
.daily .subtitle{
	padding-bottom: 8px;
    font-size: 1.2rem;
    color: #666;
}
.daily .content-footer .left{
	line-height: 2rem;
	color: #999;
}
.daily .content-footer{
	padding: 8px 0;
}
.daily .content-footer .left img{
	width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    margin-right: 3px;
}
.comments,.likes{
	float: right;
    height: 2rem;
    line-height: 2rem;
    padding-left: 2.2rem;
    margin-left: 8px;
}
.comments{
	background: url(../../../img/eat_ping.png) no-repeat 0;
    background-size: 2rem auto;
}
.likes{
	background: url(../../../img/eat_like.png) no-repeat 0;
	background-size: 2rem auto;
}
</style>
