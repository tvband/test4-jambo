<script setup lang="ts">
defineProps<{
  src: string;
	class: string;
}>();
</script>

<template>
  <div class="c-contents-header">
		<NuxtPicture
		format="webp"
		:src="src"
		sizes="100vw md:100vw lg:1200px"
		alt="コンテンツヘッダーイメージ"
		class="u-object-fit-cover-wrapper"
		:class="class"
		/>
	</div>
</template>

<style scoped>
.c-contents-header {
  height: 300px;
  position: relative;
}
</style>