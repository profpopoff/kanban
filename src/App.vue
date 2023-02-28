<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
import AppSidebar from './components/layout/AppSidebar.vue'
</script>

<template>
  <div class="container">
    <AppHeader />
    <AppSidebar />
    <main>
      <h1 class="h1">main</h1>
    </main>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  /* height: 100dvh; */
  display: grid;
  grid-template-columns: 18.75rem 1fr;
  grid-template-rows: 6rem 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar main';

  main {
    grid-area: main;
  }
}
</style>
