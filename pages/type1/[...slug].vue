<script setup lang="ts">
import format from 'date-fns/format'

const route = useRoute();
const { data } = await useAsyncData(route.path, () =>
    queryCollection("type1").path(route.path).first(),
);
</script>

<template>
  <NuxtLayout>
    <Contentsheader src="/img/GuWeY9laMAA8mLR.jpg" />
    
    <div class="c-contents">
      <div class="c-inner">
        <div>route.path : {{ route.path }}</div>
        <div>$route.params.slug : {{ $route.params.slug }}</div>
        <div>階層数 : {{ $route.params.slug.length }}</div>

        <div class="u-mt32">
          <div class="u-mb8">【schema属性値】</div>
          <div v-if="data">
            <div><b>date : </b><span v-if="data.date">{{ data.date }}</span></div>
            <div><b>date(format) : </b><span v-if="data.date">{{ format(new Date(data.date), 'yyyy.MM.dd') }}</span></div>
            <div><b>draft : </b><span v-if="data.draft">{{ data.draft }}</span></div>
            <div><b>category : </b><span v-if="data.category">{{ data.category }}</span></div>
            <div><b>image : </b><span v-if="data.image">{{ data.image }}</span></div>
            <div><b>image.src : </b><span v-if="data.image && data.image.src">{{ data.image.src }}</span></div>
            <div><b>image.alt : </b><span v-if="data.image && data.image.alt">{{ data.image.alt }}</span></div>
            <div><b>authors : </b><span v-if="data.authors">{{ data.authors }}</span></div>
            <div><b>authors[0].avatar.src : </b><span v-if="data.authors && data.authors[0].avatar.src">{{ data.authors[0].avatar.src }}</span></div>
          </div>
        </div>

        
        <ContentRenderer v-if="data" :value="data" />
        <div v-else>Type1の{{ $route.params.slug }}のコンテンツが見つかりませんでした。</div>

      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
</style>
