<script setup lang="ts">
import AppLogo from './Logo.vue'
import DarkModeToggle from './DarkModeToggle.vue'
import BoardList from './BoardList.vue'
</script>

<template>
   <div class="sidebar">
      <header>
         <AppLogo />
      </header>
      <div class="main">
         <BoardList />
         <DarkModeToggle />
      </div>
   </div>
</template>

<style scoped lang="scss">
.sidebar {
   grid-area: sidebar;

   display: flex;
   flex-direction: column;
   background-color: hsl(var(--element-color));
   border-right: 1px solid hsl(var(--grey-color) / .25);
   transition: var(--dark-theme-transition);

   --padding-inline: 1.5rem;
   padding-inline: var(--padding-inline);

   header {
      height: 6rem;
      display: flex;
      align-items: center;
   }

   .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-block: 1rem 2rem;
   }
}
</style>
