<script setup lang="ts">
</script>

<template>
  <div class="c-card">
		<div class="c-card-title">
			title : <slot name="title" mdc-unwrap="p" />
		</div>

		<div class="c-card-img">
			img : <slot name="img" mdc-unwrap="p" />
		</div>

		<div class="c-card-description">
			description : <slot name="description" mdc-unwrap="p" />
		</div>
	</div>
</template>

<style scoped>
.c-card {
	border: 1px solid #ccc;
	padding: 40px;
}
</style>