<script setup lang="ts">
import Columns from './Columns.vue'
</script>

<template>
   <div class="board">
      <Columns />
      <button>new column</button>
   </div>
</template>

<style scoped lang="scss">
.board {
   padding: 1.5rem;
   display: flex;
   gap: 1.5rem;

   button {
      /* height: 100%; */
      width: 17.5rem;
      border: none;
      border-radius: 1rem;
      background-color: hsl(var(--element-color) / .5);
      font-size: 1.5rem;
      font-weight: 600;
      color: hsl(var(--grey-color));
      text-transform: capitalize;
   }
}
</style>
