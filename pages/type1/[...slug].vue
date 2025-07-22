<script setup lang="ts">
//import format from 'date-fns/format'

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
        <p>route.path : {{ route.path }}</p>

        <p v-if="data.date">date : {{ data.date }}</p>
        <!--<p>formatDate : {{ format(new Date(data.date), 'yyyy.MM.dd') }}</p>-->
        
        <p v-if="data.draft">draft : {{ data.draft }}</p>
        <p v-if="data.category">category : {{ data.category }}</p>
        <p v-if="data.image">image : {{ data.image }}</p>
        <p v-if="data.image.src">image.src : {{ data.image.src }}</p>
        <p v-if="data.image.alt">image.alt : {{ data.image.alt }}</p>
        <p v-if="data.authors">authors : {{ data.authors }}</p>
        <p v-if="data.authors[0].avatar.src">authors[0].avatar.src : {{ data.authors[0].avatar.src }}</p>

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
