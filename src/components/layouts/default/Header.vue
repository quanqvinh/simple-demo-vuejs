<script lang="ts" setup>
import { ref, defineEmits, onMounted } from 'vue'

const headerRef = ref<null | HTMLElement>(null)
const emit = defineEmits<{
	(e: 'setPaddingTop', height: number): void
}>()

onMounted(() => {
	emit('setPaddingTop', headerRef.value?.clientHeight as number)
})
</script>

<template>
	<header ref="headerRef" class="header">
		<h2 class="header__title">
			Header layout 1
			<button 
				class="header__change-layout" 
				@click="$emit('changeLayout')"
			>
				Switch layout
			</button>
		</h2>
		<nav class="header-nav">
			<router-link 
				to="/" 
			>
				Home
			</router-link> <span class="divider">|</span>
			<router-link 
				to="/todolist"
			>
				Todo List
			</router-link>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
.header {
	@apply bg-red-900 text-white pb-2 fixed top-0 left-0 right-0;
	&__title {
		@apply py-4 text-center font-bold text-2xl relative;
	}
	&__change-layout {
		@apply absolute top-0 right-0 hover:opacity-70 text-sm font-normal my-2 mr-4;
	}
	&-nav {
		@apply text-center flex justify-center;
		a {
			@apply hover:bg-black hover:bg-opacity-10 text-lg px-4 flex;
		}
		a.router-link-active {
			@apply bg-black bg-opacity-30;
		}
	}
}
.divider {
	margin: 0 5px;
}
</style>