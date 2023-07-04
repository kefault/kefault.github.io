<template>
	<Header />
	<Top topImg="/src/assets/images/community.jpg" title="智善社区" />
	<div class="container-community wrapper">
		<div class="path">
			<span class="your">您的位置</span>
			<router-link to="/home" class="path-lv1">首页</router-link>
			<router-link to="/community" class="path-lv2">智善社区</router-link>
			<span class="path-lv3">{{subPages[$route.params.subpage]}}</span>
		</div>
		<div class="content">
			<div class="navigation">
				<router-link v-for="(value, key, i) in subPages" :to="toSubPath(key)" class="nav-item" :class="[{'is-active': $route.params.subpage === key}]">{{value}}</router-link>
			</div>
			<div class="subpage">
				<div v-for="(value, key, i) in subPages" v-show="$route.params.subpage === key">
					<h2 class="title">{{value}}</h2>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Top from '@/components/Top.vue'
import Footer from '@/components/Footer.vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const subPages = {1: "志愿者联盟", 2: "慈善储蓄所", 3: "善缘会APP", 4: "中有微信号"}

const toSubPath = (subPath) => {
	return route.path.substring(0, route.path.lastIndexOf('/')) + '/' + subPath
}
</script>

<style>
.container-community {
	.path {
		display: flex;
		height: 80px;
		line-height: 80px;
		border-bottom: 1px solid #efefef;
		
		.your {
			margin-right: 20px;
			font-size: 14px;
			font-weight: 500;
			color: #666;
		}
		
		.path-lv1, .path-lv2 {
			color: #666;
			font-size: 14px;
			
			&::after {
				padding: 0 5px;
				content: '>';
			}
		}
		
		.path-lv3 {
			color: #666;
			font-size: 14px;
		}
	}
	
	.content {
		display: flex;
		margin-top: 50px;
			
		.navigation {
			display: flex;
			height: 242px;
			flex-direction: column;
			margin-right: 50px;
			border: 1px solid #EEEEEE;
			
			.nav-item {
				display: block;
				width: 150px;
				height: 60px;
				line-height: 60px;
				font-size: 16px;
				text-align: center;
				background-color: #FFF;
				transition: font-size 0.2s;
				-webkit-transition: font-size 0.2s;
			}
			
			.nav-item:hover {
				font-size: 18px;
			}
				
			.is-active {
				font-size: 18px;
				font-weight: bold;
				color: #fff;
				background-color: #97002e;
			}
		}
		
		.subpage {
			flex: 1;
			
			.title {
				text-align: center;
			}
		}
	}
}
</style>