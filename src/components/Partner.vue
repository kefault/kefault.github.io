<template>
	<div class="partner-field">
        <div class="wrapper">
            <div class="field-title">“善”者无疆</div>
            <div class="field-sub-title">Cooperative partner</div>
            <div class="partner-panel">
                <div class="partner-link" v-for="(item, i) in partners" :key="i">
					<a :style="{'background-image': `url(${item.img})`}" :href="item.url"></a>
				</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const partners = reactive([
	{
		img: "src/assets/images/partner/cszg.jpg",
		url: "http://www.cszg365.com/h5/index.html"
	},
	{
		img: "src/assets/images/partner/dyxzz.png",
		url: "http://www.unwcdo.com/"
	},
	{
		img: "src/assets/images/partner/zjsmzt.png",
		url: "https://mzt.zj.gov.cn/"
	},
	{
		img: "src/assets/images/partner/zhcszh.png",
		url: "http://www.chinacharityfederation.org/"
	},
	{
		img: "src/assets/images/partner/sqljjh.png",
		url: "https://www.sclf.org/"
	},
	{
		img: "src/assets/images/partner/bjcs.png",
		url: "https://www.bca.org.cn/bjcsxh/web/index.html"
	},
	{
		img: "src/assets/images/partner/jxcs.png",
		url: "http://www.jxcs.org.cn/"
	},
	{
		img: "src/assets/images/partner/gdcs.jpeg",
		url: "http://www.gdcf.org.cn/"
	},
	{
		img: "src/assets/images/partner/zgshzz.png",
		url: "https://chinanpo.mca.gov.cn/"
	},
	{
		img: "src/assets/images/partner/zgxcfz.jpeg",
		url: "http://www.cfpa.org.cn/"
	}
]) 
</script>

<style lang="scss">
.partner-field {
    background-color: #F7F7F7;
	
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
		
		.partner-panel {
		    padding: 10px 10px;
		    margin-bottom: 30px;
		    width: 100%;
		    display: flex;
		    justify-content: space-around;
		    flex-wrap: wrap;
			
			.partner-link {
			    display: block;
			    height: 80px;
			    width: 220px;
			    padding: 5px 10px;
			    margin-bottom: 20px;
			    box-sizing: border-box;
			    background-color: #fff;
			    border: 1px solid #fff;
				
				a {
				    display: block;
				    height: 70px;
				    width: 200px;
				    background-repeat: no-repeat;
				    background-size: contain;
				    background-position: center;
				}
			}
			
			.partner-link:hover {
			    box-shadow: 0 0 5px #888;
			}
		}
	}
}
</style>