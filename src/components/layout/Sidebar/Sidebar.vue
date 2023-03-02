<script setup lang="ts">
import AppLogo from './Logo.vue'
import DarkModeToggle from './DarkModeToggle.vue'

</script>

<template>
   <div class="sidebar">
      <header>
         <AppLogo />
      </header>
      <DarkModeToggle />
   </div>
</template>

<style scoped lang="scss">
.sidebar {
   grid-area: sidebar;

   background-color: hsl(var(--element-color));
   border-right: 1px solid hsl(var(--grey-color) / .25);
   transition: var(--dark-theme-transition);

   padding-inline: 1.5rem;

   header {
      height: 6rem;
      display: flex;
      align-items: center;
   }
}
</style>
