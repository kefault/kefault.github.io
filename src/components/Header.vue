<template>
	<div class="header" :class="[{'header-fixed': fixed, 'header-active': scrollActive}]">
		<div class="wrapper">
			<div class="logo">
				<a href="/home">中有慈善基金会</a>
			</div>
			<div class="nav">
				<ul class="nav-ul1">
					<li class="nav-li1"><router-link to="/home" class="nav-a1" :class="[{'is-active': $route.name === 'Home'}]">开门见“善”</router-link></li>
					<li class="nav-li1"><router-link to="/about" class="nav-a1" :class="[{'is-active': $route.name === 'About'}]">上善若“谁”</router-link>
						<ul class="nav-ul2">
							<li class="nav-li2">
								<router-link to="/about/1">基金会介绍</router-link>
							</li>
							<li class="nav-li2">
								<router-link to="/about/2">基金会章程</router-link>
							</li>
							<li class="nav-li2">
								<router-link to="/about/3">组织架构</router-link>
							</li>
						</ul>
					</li>
					<li class="nav-li1"><router-link to="/projects" class="nav-a1" :class="[{'is-active': $route.name === 'Projects'}]">“善”于行动</router-link>
						<ul class="nav-ul2">
							<li class="nav-li2">
								<router-link to="/projects/1">共“童”行动</router-link>
							</li>
							<li class="nav-li2">
								<router-link to="/projects/2">共“明”行动</router-link>
							</li>
							<li class="nav-li2">
								<router-link to="/projects/3">共“济”行动</router-link>
							</li>
							<li class="nav-li2">
								<router-link to="/projects/4">共“富”行动</router-link>
							</li>
							<li class="nav-li2">
								<router-link to="/projects/5">共“通”行动</router-link>
							</li>
						</ul>
					</li>
					<li class="nav-li1"><router-link to="/news" class="nav-a1" :class="[{'is-active': $route.name === 'News'}]">善有善“报”</router-link></li>
					<li class="nav-li1"><router-link to="/community" class="nav-a1" :class="[{'is-active': $route.name === 'Community'}]">智善社区</router-link>
						<ul class="nav-ul2">
							<li class="nav-li2">
								<router-link to="/community/1">志愿者联盟</router-link>
							</li>
							<li class="nav-li2">
								<router-link to="/community/2">慈善储蓄所</router-link>
							</li>
							<li class="nav-li2">
								<router-link to="/community/3">善缘会APP</router-link>
							</li>
							<li class="nav-li2">
								<router-link to="/community/4">中有微信号</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="login">
				<router-link to="/login">会员登陆</router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const props = defineProps({
	fixed: Boolean
})

const route = useRoute()
console.log(route.name)

var scrollActive = ref(false);
onMounted(() => {
	window.addEventListener('scroll', () => {
		var scrollTop =
		    window.pageYOffset ||
		    document.documentElement.scrollTop ||
		    document.body.scrollTop;
		scrollTop >= 150 ? (scrollActive.value = true) : (scrollActive.value = false)
	})
})
</script>

<style lang="scss">
	.header {
		height: 80px;
		width: 100%;
		top: 0;
		z-index: 9999;
		background-color: hsla(0,0%,100%,.5);
		border-bottom: 2px solid #97002e;

		.wrapper {
			display: flex;
			align-items: center;
		}

		.logo a {
			display: block;
			width: 250px;
			height: 70px;
			background-image: url('@/assets/images/logo.png');
			background-repeat: no-repeat;
			background-size: contain;
			font-size: 0;
		}

		.nav {
			margin-left: 140px;
			height: 80px;

			.nav-ul1 {
				display: flex;
			}

			.nav-li1 {
				position: relative;
				width: 130px;
				text-align: center;

				.nav-a1 {
					display: block;
					padding: 0 24px;
					line-height: 80px;
					font-size: 16px;
				}

				.is-active {
					color: #fff;
					background-color: #97002e;
				}

				.nav-ul2 {
					display: none;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					top: 80px;
					z-index: 99;
					width: 100%;
					background-color: #FFFFFF;

					.nav-li2 a {
						display: block;
						padding: 0 24px;
						line-height: 46px;
						font-size: 16px;
					}

					.nav-li2 a:hover {
						background-color: #eaeaea;
					}
				}
			}

			.nav-li1:hover {
				.nav-a1 {
					color: #fff;
					background-color: #97002e;
				}

				.nav-ul2 {
					display: block;
				}
			}
		}

		.login a {
			display: block;
			height: 80px;
			width: 60px;
			margin-left: 100px;
			line-height: 80px;
			font-size: 14px;
			color: #975300;
			text-decoration: underline;
		}
	}
	
	.header-fixed {
		position: fixed;
	}
	
	.header-active {
		background-color: #FFF;
	}
</style>