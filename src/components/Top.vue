<template>
	<div class="container-fuild">
		<div class="list-top">
			<div class="banner" :style="{'background-image': `url(${topImg})`}"></div>
			<div class="mask">
				<div class="title">{{title}}</div>
				<span></span>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	topImg: String,
	title: String,
	subPages: Object
})
</script>

<style lang="scss">
.container-fuild {
	
	.list-top {
		position: relative;
		height: 400px;
		
		.banner {
			display: block;
			width: 100%;
			height: 100%;
		    background-repeat: no-repeat;
		    background-size: cover;
		    background-position: 50% 50%;
		}
		
		.mask {
			width: 100%;
			height: 100%;
		    display: -ms-flexbox;
		    display: flex;
		    -ms-flex-align: center;
		    align-items: center;
		    -ms-flex-direction: column;
		    flex-direction: column;
		    -ms-flex-pack: center;
		    justify-content: center;
		    position: absolute;
		    top: 0;
			background-color: rgba(0,0,0,.5);
			
			.title {
				color: #fff;
			    font-size: 24px;
			}
			
			span {
				width: 100px;
				height: 3px;
			    margin-top: 10px;
			    vertical-align: middle;
			    background-color: #fff;
			}
		}
	}
}
</style>