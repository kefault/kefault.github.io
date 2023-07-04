<template>
	<Header />
	<Top topImg="/src/assets/images/projects.png" title="善于行动" />
	<div class="container-projects wrapper">
		<div class="path">
			<span class="your">您的位置</span>
			<router-link to="/home" class="path-lv1">首页</router-link>
			<router-link to="/projects" class="path-lv2">善于行动</router-link>
			<span class="path-lv3">{{subPages[$route.params.subpage]}}</span>
		</div>
		<div class="content">
			<div class="navigation">
				<router-link v-for="(value, key, i) in subPages" :to="toSubPath(key)" class="nav-item" :class="[{'is-active': $route.params.subpage === key}]">{{value}}</router-link>
			</div>
			<div class="subpage">
				<div v-for="(value, key, i) in subPages" v-show="$route.params.subpage === key">
					<h2 class="title">{{value}}</h2>
					<div class="part1">
						<p class="intro">{{subPageContent[key].intro}}</p>
					</div>
					<div class="part2">
						<div class="img" :style="{'background-image': `url(${subPageContent[key].img})`}"></div>
					</div>
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
import { useRoute } from 'vue-router'

const route = useRoute()

const subPages = {1: "共童行动", 2: "共明行动", 3: "共济行动", 4: "共富行动", 5: "共通行动"}
const subPageContent = {
	1: {
		intro: "大力发展助童助学资助活动，为乡村振兴和人才培养尽一份力。我们将结合“一对一助童助学计划”项目，通过“资金+物资+陪伴+公益行+成长营+梦想港湾”等多元化关爱形式，为乡村孤困儿童提供关爱和帮扶，努力为全国学龄期孤困儿童群体搭建长期、多元的成长关爱网络，提升孤困儿童的获得感和幸福感，致力于让每一个孤困儿童拥有一个幸福的童年，助力他们更加自信、勇敢的面对未来，以关爱儿童的实际行动助力乡村振兴!",
		img: '/src/assets/images/project/child.jpg',
	},
	2: {
		intro: "倡导实施随手做志愿行动，争做志愿服务的示范者。慈善要志愿率先垂范，组织志愿者就近就便开展以“文明随手劝、车辆随手扶、垃圾随手捡、市容随手拍、困难随手帮、时长随手录”为主要内容的随手做志愿活动，组织发动志愿者，积极参加文明创建和社会治理，参与创建活动监督管理，让随手做志愿成为社会文明的一道亮丽的风景线。",
		img: '/src/assets/images/project/ming.jpeg',
	},
	3: {
		intro: "以慈善活动积极引导社会力量参与社会救助工作，丰富社会救助内容，拓展了社会救助服务领域，提升了社会救助整体成效。为社会树立慈善榜样，要积极推广一批贴近实际、贴近生活、贴近群众的社会力量参与社会救助优秀服务项目，挖掘一批群众公认的“最美照护人”，经各地区民政部门推荐、市民政局组织评审，拟推介多个社会力量参与社会救助优秀项目、多个分散供养特困人员“最美照护人”进行表彰。",
		img: '/src/assets/images/project/ji.jpg',
	},
	4: {
		intro: "共同富裕既是当前中国新时代发展的战略蓝图与远大目标，也是全面建设社会主义现代化强国的重大战略举措。事实上，要实现全体人民共同富裕，其关键在于缩小群体间的收入差距，不断提升低收入群体的增收能力、生活品质和社会福利水平。正如习近平总书记指出，低收入群体是促进共同富裕的重点帮扶保障人群。帮扶保障低收入和困难群体离不开作为民生兜底“安全网”的社会救助制度，在迈向共同富裕过程中，推进社会救助高质量发展非常关键。要拓展创新，实现救助类别化与衔接紧密化。完善基本生活救助、专项救助和急难救助这三类救助的相互联系甚至相互衔接的，为不同类型困难群体提供精准和温暖的“救助套餐”。",
		img: '/src/assets/images/project/rich.jpg',
	},
	5: {
		intro: "慈善事业在推动发展的同时，也要加强慈善文化交流合作，不仅是国内，也要走出国门，加强同世界各国、各民族的慈善文化交流。我们愈来愈意识到，世界上许多民族的慈善理念同各自的文化密不可分，而他们的文化中深层部分往往是这些民族的宗教思想，古今中外的慈善理念，则多源自他们各自的宗教经典，有着他们的传统宗教文化的底蕴。因此，我们要在慈善事业方面增进同世界各民族的交流，很自然地需要从慈善事业角度，乃至更广的角度同他们进行宗教对话，以便找到一条有效的相互合作的路线。这就要求我们学习和熟悉各民族的文化经典和宗教经典，而非依靠道听途说，从而对他们的慈善理念和慈善事业的活动方式等有一种不带偏见和更准确客观的认识和理解。这是慈善事业广泛的、健康的国际交流的前提。我们努力以“和而不同”的态度，求同存异，树立以“仁慈”、“博爱”为基础的平等相待意识，不断推进慈善事业国内以及国际的慈善文化交流的进程。",
		img: '/src/assets/images/project/tong.jpeg',
	}
}

const toSubPath = (subPath) => {
	return route.path.substring(0, route.path.lastIndexOf('/')) + '/' + subPath
}
</script>

<style lang="scss">
.container-projects {
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
			height: 302px;
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
			
			.part1 {
				margin: 20px 10px;
				
				.intro {
					font-size: 18px;
					padding: 20px 0;
					text-indent: 36px;
				}
			}
			
			.part2 {
				margin: 10px 10px 50px 10px;
				width: 1100px;
				height: 800px;
				
				.img {
					width: 100%;
					height: 100%;
					background-repeat: no-repeat;
					background-position: center;
					background-size: contain;
				}
			}
		}
	}
}
</style>