<script setup lang="ts">
/*
 プロジェクト全体で利用する関数
*/
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

onMounted(() => {
  // スムーススクロール
  /*
    参考
    https://gsap.com/community/forums/topic/38886-integrating-gsap-with-lenis-in-nuxt-3/
  */
  const lenis = new Lenis();
  // lenisとgsapを接続
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
  // lenis処理
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});
</script>
<template>
  <NuxtPage />
</template>