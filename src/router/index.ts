import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Todolist from '../pages/Todolist.vue'

const routes = [
	{ 
		path: '/', 
		name: 'home',
		component: Home 
	},
	{ 
		path: '/todolist', 
		name: 'todolist',
		component: Todolist 
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router