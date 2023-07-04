<template>
	<div class="container-intro">
		<h2 class="title">基金会介绍</h2>
		<div class="part1">
			<div class="logo">
				<img src="@/assets/images/about/logo-big.png"/>
			</div>
			<div class="intro">
				<p class="detail">浙江中有慈善基金会（简称“中有善金”）成立于2022年11月3日，注册资金200万元。中有基金是浙江省民政厅批准成立的慈善组织，业务主管单位为浙江省民政厅。</p>
				<p class="detail">中有基金在公益项目募捐、项目执行等方面制定了完善的规章制度，每年邀请第三方会计师事务所做财务审计和专项审计。聘请专业财务顾问公司和专业法律顾问。</p>
				<p class="detail">中有善金按要求对基金会章程、基金会制度、年度工作报告、项目募捐、项目执行和财务审计等情况进行全面的信息披露。中有基金发扬传统公益慈善精神，为社会弱势群体，尤其是孤、苦、老、弱、贫、病人群提供帮助和扶持。中有基金的核心理念是：善心居中，善施为有。</p>
			</div>
		</div>
		<div class="part2">
			<div class="cerfi"></div>
		</div>
	</div>
</template>

<script setup>
</script>

<style lang="scss">
.container-intro {
	font-family: 宋体, SimSun; 
	margin-bottom: 50px;
	
	.title {
		text-align: center;
	}
	
	.part1 {
		display: flex;
		justify-content: space-between;
		margin: 50px 10px;
		
		.logo {
			width: 300px;
			height: 300px;
			border: 1px solid #efefef;
			margin-right: 40px;
			
			img {
				width: 300px;
				height: 300px;
			}
		}
		
		.intro {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			
			.detail {
				font-size: 18px;
				padding: 20px 0;
				text-indent: 36px;
			}
		}
	}
	
	.part2 {
		margin: 50px 10px;
		width: 1160px;
		height: 880px;
		
		.cerfi {
			width: 100%;
			height: 100%;
			background-image: url(@/assets/images/about/certification.png);
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
		}
	}
}
</style>