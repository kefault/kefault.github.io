<template>
	<Header />
	<Top topImg="/src/assets/images/news.jpeg" title="善有善报" />
	<div class="container-news wrapper">
		<div class="path">
			<span class="your">您的位置</span>
			<router-link to="/home" class="path-lv1">首页</router-link>
			<router-link to="/news" class="path-lv2">善有善报</router-link>
		</div>
		<div class="news-list" v-show="!$route.params.id">
		    <div class="item" v-for="(item, i) in pageNews" :key="i">
		        <div class="date">
		            <h2>{{item.day}}</h2>
		            <span>{{item.month}}</span>
		        </div>
		        <a class="detail" :href="item.url">
		            <div class="title">{{item.title}}</div>
		            <div class="desc">{{item.desc}}</div>
		        </a>
		    </div>
			<div class="pagination-wrapper">
				<Pagination :page-config="pageConfig" @changeCurrentPage="changePage" />
			</div>
		</div>
		<div class="news-content" v-show="$route.params.id">
			<div class="title">{{curNews.title}}</div>
			<div class="date">发布时间：{{curNews.date}}</div>
			<div class="detail" v-html="curNews.detail"></div>
		</div>
	</div>
	<Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Top from '@/components/Top.vue'
import Footer from '@/components/Footer.vue'
import Pagination from '@/components/Pagination.vue'
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

// 当前新闻
const curNews = ref({})

// 新闻列表
const pageNo = ref(1)
const pageNews = ref([])
const pageConfig = ref({total: 1, pageSize: 5, pageNo: 1})

const loadNews = () => {
	// 指定页面
	if (route.params.id) {
		fetch('/src/assets/uploads/news/' + route.params.id + "/content.json")
		    .then(response => response.json())
			.then(async(content) => { 
				const response = await fetch('/src/assets/uploads/news/' + route.params.id + '/detail.html')
				content['detail'] = await response.text()
				curNews.value = content
			})
	} else {
		fetch('/src/assets/uploads/news.json')
		    .then(response => response.json())
		    .then(async(news) => {
				const tmpNews = []
				const minId = (pageNo.value - 1) * pageConfig.value.pageSize
				const maxId = pageNo.value * pageConfig.value.pageSize
				for (var i = 0, legal = 0; i < news.length; i++) {
					if (news[i].state > 0) {
						if (legal >= minId && legal < maxId) {
							const response = await fetch('/src/assets/uploads/news/' + news[i].id + '/content.json')
							const data = await response.json()
							tmpNews.push({
								title: data.title,
								desc: data.introduction,
								month: data.date.substr(0,7),
								day: data.date.substr(8,2),
								url: '/news/' + data.id
							})
						}
						legal++;
					}
				}
				pageConfig.value.total = legal;
				pageNews.value = tmpNews;
		    });
	}
}

// 修改页面
const changePage = (page) => {
	pageNo.value = page;
	loadNews();
}

// 页面加载
onMounted(() => {
	loadNews();
})

// 监控路由变化
watch(route, () => {
  loadNews();
});
</script>

<style lang="scss">
.container-news {
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
		}
		
		.path-lv1::after {
			padding: 0 5px;
			content: '>';
		}
	}
	
	.news-list {
	    display: flex;
	    margin-top: 20px;
		flex-direction: column;
		
		.item {
		    height: 100px;
		    margin-bottom: 20px;
		    display: flex;
		    background-color: #fafafa;
		}
		
		.item:hover {
		    // background-color: #eaeaea;
			
			.detail .title {
			    color: #dc0042;
			}
		}
		
		.date {
		    width: 100px;
		    height: 100%;
		    display: flex;
		    flex-direction: column;
		    justify-content: center;
		    align-items: center;
		    background-color: #eaeaea;
		}
		
		.detail {
			flex: 1;
		    display: block;
		    height: 100%;
		    padding: 6px 10px;
		    display: flex;
		    flex-direction: column;
		    font-size: 14px;
			margin-left: 10px;
			
			.title {
				font-size: 18px;
			    padding: 10px 0;
			    font-weight: bold;
			}
			
			.desc {
			    width: 100%;
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 2;
			    overflow: hidden;
			    color: #888;
			}
		}
		
		.pagination-wrapper {
			margin: 20px 20px;
			display: flex;
			justify-content: right;
		}
	}
	
	.news-content {
		display: flex;
		margin: 20px 0;
		flex-direction: column;
		
		.title {
			text-align: center;
			font-size: 22px;
			padding: 10px 0;
			font-weight: bold;
		}
		
		.date {
			text-align: center;
			font-size: 14px;
			color: #afafaf;
			margin-bottom: 20px;
		}
		
		.detail {
			font-size: 16px;
			
			p {
				text-indent: 32px;
				text-align: justify;
			}
		}
	}
}
</style>