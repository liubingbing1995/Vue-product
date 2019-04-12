<template>
	<div id="search">
		<button @click="goback()">返回上一页</button>
		<h1>这是搜索页面</h1>
	</div>
</template>

<script>
export default{
	data(){
		return{
			
		}
	},
	methods:{
		goback(){
			this.$router.go(-1)

		}
	}
}
</script>