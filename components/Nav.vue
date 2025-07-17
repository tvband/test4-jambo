<script setup lang="ts">
</script>

<template>
  <nav class="l-nav">
		<ul class="c-nav-list">
			<li><NuxtLink to="/">PostType1</NuxtLink></li>
			<li><NuxtLink to="/">PostType2</NuxtLink></li>
			<li><NuxtLink to="/">PostType3</NuxtLink></li>
			<li><NuxtLink to="/">PostType4</NuxtLink></li>
		</ul>
	</nav>
</template>

<style scoped>
.l-nav {
	padding: 32px 0;
}
.c-nav-list {
	display: flex;
	gap: 16px;
	justify-content: center;
	list-style: none;
	margin: 0;
	padding: 0;
	li {
		a {
			border: 1px solid #aaa;
			border-radius: 4px;
			display: block;
			padding: 0 16px;
		}
	}
}
</style>