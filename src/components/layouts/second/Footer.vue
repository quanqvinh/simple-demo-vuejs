<script lang="ts" setup></script>

<template>
	<footer class="footer">
		<h2 class="footer-title">Footer layout 2</h2>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	@apply bg-green-900 py-5 text-white;
	&-title {
		@apply text-2xl text-center font-bold;
	}
}
</style>