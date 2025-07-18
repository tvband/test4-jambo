<script setup lang="ts">

const { data } = await useAsyncData("type1", () =>
    queryCollection("type1").order("id", "DESC").all(),
);
</script>

<template>
  <NuxtLayout>
    <Contentsheader src="/img/GuWeY9laMAA8mLR.jpg" :class="'view-item' + $route.params.slug" />
    
    <div class="c-contents">
      <div class="c-inner">
        <ul v-if="data" class="list">
      		<li v-for="article in data" :key="article.path" class="list_item">
						<NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
					</li>
				</ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
</style>
