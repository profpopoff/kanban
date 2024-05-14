<script setup lang="ts">
import Columns from "./Columns.vue";
</script>

<template>
  <div class="board">
    <Columns />
    <button>new column</button>
  </div>
</template>

<style scoped lang="scss">
.board {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  height: 100%;
  padding: 1.5rem;

  button {
    padding: 1.75rem;
    border: none;
    background-color: hsl(var(--element-color));
    border-radius: 0.75rem;
    box-shadow: 0 0.2rem 0.5rem hsl(var(--accent-color) / 0.2);
    writing-mode: vertical-lr;
    font-size: 2rem;
    font-weight: 600;
    color: hsl(var(--grey-color));
    text-transform: capitalize;
    cursor: pointer;

    transition: var(--dark-theme-transition);
  }
}
</style>
