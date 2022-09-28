<script lang="ts" setup></script>

<template>
	<footer class="footer">
		<h2 class="footer-title">Footer layout 1</h2>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	@apply bg-yellow-800 py-5 text-white;
	&-title {
		@apply text-2xl text-center font-bold;
	}
}
</style>