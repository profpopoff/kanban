<script setup lang="ts">
import Header from "./components/layout/Header/Header.vue";
import Sidebar from "./components/layout/Sidebar/Sidebar.vue";
import Board from "./components/layout/Board/Board.vue";
</script>

<template>
  <div class="container">
    <Header />
    <Sidebar />
    <main>
      <Board />
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
    "sidebar header"
    "sidebar main";

  main {
    grid-area: main;
    overflow: auto;
  }
}
</style>
