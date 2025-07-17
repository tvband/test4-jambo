<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(route.path, () =>
    queryCollection("type1").path(route.path).first(),
);
</script>

<template>
  <NuxtLayout>
    <Contentsheader src="/img/GuWeY9laMAA8mLR.jpg" :class="'view-item' + $route.params.slug" />
    
    <div class="c-contents">
      <div class="c-inner">
        <ContentRenderer v-if="data" :value="data" />
        <div v-else>Type1の{{ $route.params.slug }}のコンテンツが見つかりませんでした。</div>

        <p>$route.params.slug : {{ $route.params.slug }}</p>

        <p>何階層目か : {{ $route.params.slug.length }}</p>

      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
</style>
