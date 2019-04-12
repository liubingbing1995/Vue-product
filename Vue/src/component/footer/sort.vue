<template>
	<div class="sort">
		<router-link to="/data-list/search" class="classify">
			<span class="input-box">
				<i>热销零食</i>
			</span>
		</router-link>
		<ul>
			<li v-for="(v,i) in result.sortList">
				<router-link to="/data-list/sortProduct">
					<img :src="v.imgPath">
					<p>{{v.title}}</p>
				</router-link>
			</li>
		</ul>
		<v-footer></v-footer>
	</div>
</template>

<script>
export default{
	data(){
		return{
			result:new Object
		}
	},
	mounted() {
		var _this=this
			this.$http.get('./data/sort.json')
			  .then(function (response) {
			    _this.result=response.data.result;
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

<style scoped="">
i{
	font-weight: 400;
	font-style: normal;
}
.sort{
	margin-top: 0;
    padding-bottom: 55px;
    background: #fff;
}
.classify{
	background: #ff4f39;
    border-bottom: 1px solid #efefef;
    position: relative;
    padding: 8px 5%;
    display: block;
}
.input-box{
	display: block;
    height: 34px;
    line-height: 34px;
    border-radius: 17px;
	background-color: #fff;
    color: #ff4f39;
}
.input-box i{
    line-height: 34px;
    padding-left: 30px;
    font-size: 1.2rem;
	background: url(../../../img/icon_search_3.png) no-repeat 5px;
    background-size: 20px;
}
.sort ul{
	display: flex;
	flex-wrap: wrap;
	margin-top: 10px;
	padding: 0 10px;
	overflow: hidden;
}
.sort li{
	width: 25%;
	margin: 0 4.1% 10px;
	text-align: center;
}
.sort li p{
	padding: 8px 0;
    font-size: 1.3rem;
    color: #c7c7c7;
}
</style>