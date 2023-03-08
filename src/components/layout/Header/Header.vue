<script setup lang="ts">
import DefaultButton from '../../ui/DefaultButton.vue'
import { useBoardsStore } from '../../../stores/boards'
import { storeToRefs } from 'pinia'

const store = useBoardsStore()
const { currentBoard } = storeToRefs(store)
</script>

<template>
   <header>
      <h1>{{ currentBoard?.title }}</h1>
      <DefaultButton>add new task</DefaultButton>
   </header>
</template>

<style scoped lang="scss">
header {
   grid-area: header;

   background-color: hsl(var(--element-color));
   border-bottom: 1px solid hsl(var(--grey-color) / .25);
   transition: var(--dark-theme-transition);

   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-inline: 1.5rem;

   h1 {
      font-size: 1.7rem;
      font-weight: 600;
   }
}
</style>
