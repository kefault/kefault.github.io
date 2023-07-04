<template>
	<Header :fixed="true"/>
	<HomeSwiper />
	<Project />
	<News />
	<Partner />
	<Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import HomeSwiper from '@/components/HomeSwiper.vue'
import Project from '@/components/Project.vue'
import News from '@/components/News.vue'
import Partner from '@/components/Partner.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
</style>