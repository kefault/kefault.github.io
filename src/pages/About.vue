<template>
	<Header/>
	<Top topImg="/src/assets/images/about.jpg" title="上善若谁" :subPages="subPages"/>
	<div class="container-about wrapper">
		<div class="path">
			<span class="your">您的位置</span>
			<router-link to="/home" class="path-lv1">首页</router-link>
			<router-link to="/about" class="path-lv2">上善若谁</router-link>
			<span class="path-lv3">{{subPages[$route.params.subpage]}}</span>
		</div>
		<div class="content">
			<div class="navigation">
				<router-link v-for="(value, key, i) in subPages" :to="toSubPath(key)" class="nav-item" :class="[{'is-active': $route.params.subpage === key}]">{{value}}</router-link>
			</div>
			<div class="subpage">
				<Introduction v-if="$route.params.subpage == 1"></Introduction>
				<Rules v-if="$route.params.subpage == 2"></Rules>
				<Organization v-if="$route.params.subpage == 3"></Organization>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Top from '@/components/Top.vue'
import Introduction from '@/components/about/Introduction.vue'
import Rules from '@/components/about/Rules.vue'
import Organization from '@/components/about/Organization.vue'
import Footer from '@/components/Footer.vue'

import { useRoute } from 'vue-router'

const route = useRoute()

const subPages = {1: "基金会介绍", 2: "基金会章程", 3: "组织架构"}

const toSubPath = (subPath) => {
	return route.path.substring(0, route.path.lastIndexOf('/')) + '/' + subPath
}
</script>

<style lang="scss">
.container-about {
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
			height: 182px;
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
		}
	}
}
</style>