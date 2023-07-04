<template>
    <div class="real-footer">
        <div class="wrapper">
            <div class="link">
                <div class="logo">
                    <a href="/home">中有慈善基金会</a>
                </div>
                <div class="nav">
                    <ul class="nav-ul1">
						<li class="nav-li1"><router-link to="/about">上善若“谁”</router-link>
							<ul class="nav-ul2">
								<li class="nav-li2">
									<a href="/about/1">基金会介绍</a>
								</li>
								<li class="nav-li2">
									<a href="/about/2">基金会章程</a>
								</li>
								<li class="nav-li2">
									<a href="/about/3">组织架构</a>
								</li>
							</ul>
						</li>
						<li class="nav-li1"><router-link to="/projects">“善”于行动</router-link>
							<ul class="nav-ul2">
								<li class="nav-li2">
									<a href="/projects/1">共童行动</a>
								</li>
								<li class="nav-li2">
									<a href="/projects/2">共明行动</a>
								</li>
								<li class="nav-li2">
									<a href="/projects/3">共济行动</a>
								</li>
								<li class="nav-li2">
									<a href="/projects/4">共富行动</a>
								</li>
								<li class="nav-li2">
									<a href="/projects/5">共通行动</a>
								</li>
							</ul>
						</li>
						<li class="nav-li1"><router-link to="/news">善有善“报”</router-link></li>
						<li class="nav-li1"><router-link to="/community">智善社区</router-link>
							<ul class="nav-ul2">
								<li class="nav-li2">
									<a href="/community/1">志愿者联盟</a>
								</li>
								<li class="nav-li2">
									<a href="/community/2">慈善储蓄所</a>
								</li>
								<li class="nav-li2">
									<a href="/community/3">善缘会APP</a>
								</li>
								<li class="nav-li2">
									<a href="/community/4">中有微信号</a>
								</li>
							</ul>
						</li>
                    </ul>
                </div>
            </div>
            <div class="contact-us">
                <p>联系我们</p>
                <a href="#"><span class="iconfont icon-dizhi"></span> 杭州市余杭区五常街道联创街133号2幢</a>
                <a href="tel:00000-00000000"><span class="iconfont icon-dianhua"></span> 00000-00000000</a>
                <a href="mailto:xxxx@xxxxx.com"><span class="iconfont icon-duanxin"></span> xxxx@xxxxx.com</a>
				<p>捐赠渠道</p>
				<a href="#"><span>账户名称</span>：浙江中有慈善基金会</a>
				<a href="#"><span>账号</span>：637893564</a>
				<a href="#"><span>开户行</span>：中国民生银行股份有限公司杭州涌金支行</a>
            </div>
        </div>
        <p class="copyright" style="cursor: default">©2023-2023&nbsp;&nbsp;Copyright 浙江中有慈善基金会&nbsp;<a href="https://beian.miit.gov.cn" target="_blank">ICP备案1111111111号-1</a></p>
      </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.name)
</script>

<style lang="scss">
.real-footer {
	background-image: url(@/assets/images/footer.png);
	
	.wrapper {
	    height: 250px;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
		
		.link {
		    padding: 0 20px;
		    display: flex;
		    align-items: center;
			
			.logo a {
			    display: block;
			    width: 192px;
			    height: 192px;
			    background-image: url(@/assets/images/logo-m.png);
			    background-repeat: no-repeat;
			    background-size: contain;
			    font-size: 0;
			}
			
			.nav {
			    margin-left: 60px;
				
				.nav-ul1 {
				    display: flex;
					width: 30px;
					
					.nav-li1 {
						a {
							display: block;
							height: 30px;
							width: 100px;
							margin-left: 20px;
							font-size: 18px;
							color: #FFF;
							text-align: center;
						}
						
						.nav-ul2 {
							display: flex;
							flex-direction: column;
							margin-top: 10px;
							
							.nav-li2 a {
								display: block;
								height: 30px;
								line-height: 30px;
								font-size: 12px;
								text-align: center;
							}
						}
					}
				}
			}
		}
		
		.contact-us {
		    width: 350px;
		    padding: 20px 20px;
		    display: flex;
		    flex-direction: column;
			
			p {
			    font-size: 14px;
				font-weight: bold;
				color: #FFF;
			    margin: 5px 0;
			}
			
			a {
			    font-size: 12px;
				color: #FFF;
			    padding: 3px 0;
				
				.iconfont {
					font-size: 12px;
				    width: 14px;
				    height: 14px;
				}
				
				span {
				    display: inline-block;
				    width: 50px;
				    text-align: justify;
				    text-justify: distribute-all-lines; // 这行必加，兼容ie浏览器
				    text-align-last: justify;
				}
			}
		}
	}
	
	.copyright {
		height: 30px;
		line-height: 30px;
	    font-size: 13px;
	    display: block;
	    text-align: center;
	    color: #FFF;
	    cursor: pointer;
	    text-decoration: none;
		
		a {
			color: #FFF;
		}
	}
}
</style>