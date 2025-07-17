<script setup lang="ts">

</script>

<template>
  <div class="l-wrapper">
    <Header />

    <main class="l-main">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.l-wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
}
.l-header {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
