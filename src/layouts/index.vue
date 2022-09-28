<script lang="ts" setup>
import DefaultLayout from './Default.vue'
import SecondLayout from './Second.vue'
import { withDefaults, defineProps, ref } from 'vue'

export type LayoutName = 'default' | 'second'

interface Props {
	name?: LayoutName
}

const props = withDefaults(defineProps<Props>(), {
	name: 'default'	// Default value if not pass name
})

const currentLayout = ref<LayoutName>(props.name)
const paddingTop = ref(0)

const layouts: Record<LayoutName, any> = {
	default: DefaultLayout,
	second: SecondLayout,
}

// Switch layout
const changeLayout = (name: LayoutName) => {
	currentLayout.value = name
}

const setPaddingTop = (headerHeight: number) => {
	paddingTop.value = headerHeight
}
</script>

<template>
	<!-- Dynamic component -->
	<component 
		:is="layouts[currentLayout]"
		class="layout"
		@change-layout="changeLayout"
		@set-padding-top="setPaddingTop"
		:style="{ paddingTop: paddingTop + 'px' }"
	>
		<slot></slot>
	</component>
</template>

<style lang="scss">
.layout {
	@apply flex flex-col h-full;
}
.content {
	@apply h-full;
	&-wrapper {
		@apply p-4;
	}
}
</style>

