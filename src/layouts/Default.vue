<script lang="ts" setup>
import DefaultHeader from '../components/layouts/default/Header.vue'
import DefaultFooter from '../components/layouts/default/Footer.vue'
</script>

<template>
	<div>
		<default-header 
			@change-layout="$emit('changeLayout', 'second')" 
			@set-padding-top="$emit('setPaddingTop', $event)" 
		/>
		<main class="content content-wrapper">
			<slot></slot>
		</main>
		<default-footer />
	</div>
</template>

<style lang="scss" scoped>

</style>