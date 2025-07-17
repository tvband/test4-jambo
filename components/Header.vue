<script setup lang="ts">
</script>

<template>
  <header class="l-header">
		<div class="c-header-mark"><NuxtLink to="/"><i>back to top</i></NuxtLink></div>
	</header>
</template>

<style scoped>
.l-header {
	align-items: center;
	display: flex;
	height: 50px;
	padding: 0;
	mix-blend-mode: difference;
}
.c-header-mark {
	a {
		display: block;
		padding: 16px;
		transition: all .4s ease;
		&:hover {
			transform: rotate(360deg);
		}
	}
	i {
		background-color: var(--color-key);
		clip-path: polygon(
			0 35%, 40% 33%, 50% 0, 60% 30%, 100% 33%, 70% 55%, 85% 100%, 50% 75%, 15% 100%, 30% 55%
		);
		color: transparent;
		display: block;
		height: 32px;
		width: 32px;
		
	}
}
</style>