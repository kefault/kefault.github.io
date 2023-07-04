<template>
	<div class="news-field">
        <div class="wrapper">
            <div class="field-title">“善”有善报</div>
            <div class="field-sub-title">Charity information</div>
            <div class="news">
                <div class="image">
                    <div class="swiper-container" id="news_swiper_container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item, i) in swipers" :key="i">
                                <div class="img-box" :style="{'background-image': `url(${item.img})`}">
                                    <a class="img-link" :href="item.url">{{item.title}}</a>
                                </div>
                            </div>  
                        </div>
                        <div class="swiper-button-next"></div>
						<div class="swiper-button-prev"></div>
                        <div class="swiper-pagination" v-for="(item, i) in swipers" :key="i"></div>
                    </div>
                </div>
                <div class="link">
                    <div class="item" v-for="(item, i) in links" :key="i">
                        <div class="date">
                            <h2>{{item.day}}</h2>
                            <span>{{item.month}}</span>
                        </div>
                        <a class="detail" :href="item.url">
                            <div class="title">{{item.title}}</div>
                            <div class="desc">{{item.desc}}</div>
                        </a>
                    </div>
                </div>
            </div>
            <a class="more" href="/news">查看更多</a>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import Swiper from 'swiper';

const swipers = reactive([])
const links = reactive([])

onMounted(() => {
	// load news
	fetch('/src/assets/uploads/news.json')
	    .then(response => response.json())
	    .then(async(news) => {
			const data = []
			for (var i = 0; i < news.length; i++) {
				if (news[i].state > 0) {
					const response = await fetch('/src/assets/uploads/news/' + news[i].id + '/content.json')
					const content = await response.json()
					data.push(content)
				}
			}
			for (var i = 0, legal = 0; i < data.length && legal < 4; i++) {
				if (data[i].cover) {
					swipers.push({
						title: data[i].title,
						img: '/src/assets/uploads/news/' + data[i].id + '/cover.jpeg',
						url: '/news/' + data[i].id
					})
					legal++;
				}
			}
			for (var i = 0; i < 5 && i < data.length; i++) {
				links.push({
					title: data[i].title,
					desc: data[i].introduction,
					month: data[i].date.substr(0,7),
					day: data[i].date.substr(8,2),
					url: '/news/' + data[i].id
				})
			}
	    });
	// 创建swiper，setTimeout防止loop失效
	setTimeout(() => {
		const newsSwiper = new Swiper('#news_swiper_container', {
		    autoplay: {
				delay: 3000,
		        stopOnLastSlide: false,
		        disableOnInteraction: false,
		    },
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
		    speed: 500,
		    navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
		    },
		    pagination: {
				el: '.swiper-pagination'
		    },
		    loop: true,
		    slidesPerView: 'auto',
			grabCursor: true,
		});
	}, 300);
})
</script>

<style lang="scss">
.news-field {
	background-image: url(@/assets/images/background/news-bg.png);
	background-repeat: no-repeat;
	background-size: cover;
	
	.wrapper {
	    display: flex;
	    padding-top: 30px;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;
		
		.field-title {
			font-size: 28px;
			padding: 5px 10px;
			font-weight: 700;
			color: #fff;
			background-color: #97002e;
		}
		
		.field-sub-title {
		    padding: 10px 10px;
		    font-size: 22px;
		    font-weight: 700;
		    color: #97002e;
		}
		
		.news {
		    width: 100%;
		    margin-top: 30px;
		    display: flex;
		    justify-content: space-between;
			
			.image {
			    width: 540px;
			}
			
			.link {
			    width: 640px;
				
				.item {
				    height: 100px;
				    margin-bottom: 2px;
				    display: flex;
				    background-color: #fafafa;
				}
				
				.item:hover {
				    background-color: #eaeaea;
					
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
				    display: block;
				    height: 100%;
				    width: 520px;
				    padding: 10px 10px;
				    display: flex;
				    flex-direction: column;
				    font-size: 14px;
					
					.title {
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
			}
		}
	
		.more {
		    display: block;
		    width: 180px;
		    height: 46px;
		    line-height: 44px;
		    margin: 40px auto 30px;
		    box-sizing: border-box;
		    text-align: center;
		    color: #97002e;
		    border: 1px solid #97002e;
		    font-size: 14px;
		    border-radius: 4px;
		}
	}
}

.swiper-pagination-bullet-active {
	background: #f16143
}

#news_swiper_container {
	.swiper-slide .img-box {
	    display: block;
	    width: 540px;
	    height: 508px;
	    background-size: cover;
	    background-repeat: no-repeat;
	    position: relative;
		
		.img-link {
		    display: block;
		    position: absolute;
		    bottom: 0;
		    height: 40px;
		    width: 100%;
		    padding-left: 20px;
		    line-height: 40px;
		    font-size: 14px;
		    font-weight: bold;
		    color: #fff;
		    background-color: rgba(0,0,0,.5);
		}

		.img-link:hover {
			text-decoration: underline;
			color: #dc0042;
		}
	}
	
	.swiper-pagination-bullet {
	    display: none;
	}
	
	.swiper-button-next, .swiper-button-prev {
	    width: 50px;
	    height: 50px;
	    border-radius: 50%;
	    background-size: 16px!important;
	    background-position: 50%!important
	}
	
	.swiper-button-prev {
	    left: 25px;
	    background:rgba(0,0,0,.5) url(@/assets/images/base/swiper_arrow_prev.png) no-repeat
	}
	
	.swiper-button-next {
	    right: 25px;
	    background:rgba(0,0,0,.5) url(@/assets/images/base/swiper_arrow_next.png) no-repeat
	}
}
</style>