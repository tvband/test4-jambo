<script setup lang="ts">
</script>

<template>
  <NuxtLayout>
    <Contentsheader src="/img/GuWeY9laMAA8mLR.jpg" :class="'view-item' + $route.params.slug" />
    
    <div class="c-contents">
      <div class="c-inner">
				<h2>Type1記事一覧</h2>

				<Indexlist postType="type1" />

      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
</style>
