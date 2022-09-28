<script lang="ts" setup></script>
	
<template>
	<div class="sidebar">
		<h4 class="sidebar-title">Sidebar title</h4>
		<div class="nav">
			<router-link class="nav-item" to="/">
				Home
			</router-link>
			<router-link class="nav-item" to="/todolist">
				Todo List
			</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.sidebar {
	@apply bg-purple-900 h-full text-white w-1/4 py-3 max-w-[300px];

	&-title {
		@apply font-bold text-center text-xl pb-3;
	}

	.nav {
		&-item {
			@apply block p-2 hover:bg-black hover:bg-opacity-10;
			padding-left: 2rem !important;

			&.router-link-active {
				@apply bg-black bg-opacity-30 relative;
				&::before {
					@apply inline absolute font-bold left-0 translate-x-2;
					content: ">";
				}
			}
		}
	}
}
</style>