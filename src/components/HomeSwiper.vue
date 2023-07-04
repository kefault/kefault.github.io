<template>
	<div class="swiper-container" id="home_swiper_container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="(item, i) in swipers" :key="i">
	            <div class="img-box" :style="{'background-image': `url(${item.img})`}"></div>
	        </div> 
	    </div>
	    <div class="swiper-button-next"></div>
	    <div class="swiper-button-prev"></div>
		<div class="swiper-pagination" v-for="(item, i) in swipers" :key="i"></div>
	</div>
</template>


<script setup>
import {reactive} from 'vue'
import Swiper from 'swiper'
import { onMounted } from 'vue';

const swipers = reactive([
	{
		img: 'src/assets/images/home_swiper/preview.png'
	},
	{
		img: 'src/assets/images/home_swiper/linian.png'
	},
	{
		img: 'src/assets/images/home_swiper/ertong.png'
	},
	{
		img: 'src/assets/images/home_swiper/xiyue.png'
	},
])

onMounted(() => {
	const homeSwiper = new Swiper('#home_swiper_container', {
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
})
</script>

<style lang="scss">
	.swiper-pagination-bullet-active {
	    background:#f16143
	}
	
	#home_swiper_container {
		.swiper-slide .img-box {
		    display: block;
		    width: 100%;
		    height: 100vh;
		    background-size: cover;
		    background-position: 50%;
		    background-repeat: no-repeat
		}
		
		.swiper-button-next, .swiper-button-prev {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			background-size: 16px!important;
			background-position: 50%!important
		}
		
		.swiper-button-prev {
		    left: 50px;
		    background:rgba(0,0,0,.2) url(@/assets/images/base/swiper_arrow_prev.png) no-repeat
		}
		
		.swiper-button-next {
		    right:50px;
		    background:rgba(0,0,0,.2) url(@/assets/images/base/swiper_arrow_next.png) no-repeat
		}
	}
</style>