<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(route.path, () =>
    queryCollection("content").path(route.path).first(),
);
</script>

<template>
  <NuxtLayout>
    <Contentsheader src="/img/GuWeY9laMAA8mLR.jpg" :class="'view-item' + $route.params.id" />
    
    <div class="c-contents">
      <Nav />

      <div class="c-inner">
        <ContentRenderer v-if="data" :value="data" />
        <div v-else>コンテンツが見つかりませんでした。</div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
</style>
