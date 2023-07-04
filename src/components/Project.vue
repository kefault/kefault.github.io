<template>
	<div class="project-field">
        <div class="wrapper">
            <div class="field-title">“善”于行动</div>
            <div class="field-sub-title">Charitable projects</div>
            <div class="projects">
                <router-link class="item" v-for="(item, i) in projects" :to="projects[i].to">
                    <img class="img" :src="item.url">
                    <div class="title">{{item.name}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const projects = reactive([
	{
		name: '共童行动',
		url: 'src/assets/images/project/child.jpg',
		to: '/projects/1'
	},
	{
		name: '共明行动',
		url: 'src/assets/images/project/ming.jpeg',
		to: '/projects/2'
	},
	{
		name: '共济行动',
		url: 'src/assets/images/project/ji.jpg',
		to: '/projects/3'
	},
	{
		name: '共富行动',
		url: 'src/assets/images/project/rich.jpg',
		to: '/projects/4'
	},
	{
		name: '共通行动',
		url: 'src/assets/images/project/tong.jpeg',
		to: '/projects/5'
	}
])
</script>

<style lang="scss">
.project-field {
	background-image: url(@/assets/images/background/field-bg.png);
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
		
		.projects {
		    width: 100%;
		    padding: 20px 0;
		    display: flex;
		    justify-content: space-around;
			
			.item {
			    position: relative;
			    display: block;
			    width: 220px;
			    height: 260px;
			    display: flex;
			    flex-direction: column;
			    border-radius: 5px;
			    background-color: #eaeaea;
			    transition: all 0.3s;
			    -webkit-transition: all 0.3s;
				
				.img {
				    width: 100%;
				    height: 220px;
				    border-radius: 4px 4px 0 0;
				}
				
				.title {
				    width: 100%;
				    height: 40px;
				    line-height: 40px;
				    text-align: center;
				    font-size: 18px;
				    font-weight: bold;
				}
			}
			
			.item:hover {
			    transform: translateY(-5px);
			    box-shadow: 0 0 5px #888;
			}
		}
	}
}
</style>