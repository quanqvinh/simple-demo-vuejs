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
		<h2 class="header__title">Header layout 2</h2>
		<button class="header__change-layout" @click="$emit('changeLayout')">Switch layout</button>
	</header>
</template>
	
<style lang="scss" scoped>
.header {
	@apply bg-blue-900 text-white fixed top-0 left-0 right-0;

	&__title {
		@apply py-4 text-center font-bold text-2xl relative;
	}

	&__change-layout {
		@apply absolute top-0 right-0 hover:opacity-70 text-sm font-normal my-2 mr-4;
	}

	&-nav {
		@apply text-center;

		a {
			@apply hover:bg-black hover:bg-opacity-10 text-lg px-4;
		}
	}
}

.current-selection {
	@apply bg-black bg-opacity-30 hover:bg-opacity-100;
}
</style>