import 'swiper/dist/css/swiper.min.css'
import './assets/css/base.css'
import './assets/iconfont/iconfont.css'

import 'swiper/dist/js/swiper.min'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Projects from './pages/Projects.vue'
import News from './pages/News.vue'
import Community from './pages/Community.vue'
import Login from './pages/Login.vue'

const routes = [
	{
	    path: "/",
	    redirect: "/home"
	},
	{
        path: "/home",
        name: "Home",
        component: Home,
        children: []
	},
	{
	    path: "/about",
	    redirect: "/about/1"
	},
	{
	    path: "/about/:subpage",
	    name: "About",
	    component: About,
	    children: []
	},
	{
	    path: "/projects",
	    redirect: "/projects/1"
	},
	{
	    path: "/projects/:subpage",
	    name: "Projects",
	    component: Projects,
	    children: []
	},
	{
	    path: "/news/:id?",
	    name: "News",
	    component: News,
	    children: []
	},
	{
	    path: "/community",
	    redirect: "/community/1"
	},
	{
	    path: "/community/:subpage",
	    name: "Community",
	    component: Community,
	    children: []
	},
	{
	    path: "/login",
	    name: "Login",
	    component: Login,
	    children: []
	}
]

//路由对象
const router = createRouter({
    history: createWebHistory(),
    routes,
	scrollBehavior: (to, from, savePosition) => {
	    return { left: 0, top: 0 }
	}
})

createApp(App).use(router).mount('#app')
