<script lang="ts" setup>
import SecondHeader from '../components/layouts/second/Header.vue'
import SecondFooter from '../components/layouts/second/Footer.vue'
import SecondSidebar from '../components/layouts/second/Sidebar.vue'
</script>
	
<template>
	<div>
		<second-header 
			@change-layout="$emit('changeLayout', 'default')" 
			@set-padding-top="$emit('setPaddingTop', $event)"
		/>
		<div class="content">
			<second-sidebar />
			<main class="content-wrapper">
				<slot></slot>
			</main>
		</div>
		<second-footer />
	</div>
</template>

<style lang="scss" scoped>
.content {
	@apply flex;
}
</style>