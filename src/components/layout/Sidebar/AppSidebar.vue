<script setup lang="ts">
import DarkModeToggle from './DarkModeToggle.vue'

</script>

<template>
   <div class="sidebar">
      <h2>sidebar</h2>
      <DarkModeToggle />
   </div>
</template>

<style scoped lang="scss">
.sidebar {
   grid-area: sidebar;
   background-color: hsl(var(--element-color));
   border-right: 1px solid hsl(var(--grey-color) / .25);
}
</style>
