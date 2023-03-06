<script setup lang="ts">
import CustomButton from '../../ui/CustomButton.vue'
import { useBoardsStore } from '../../../stores/boards'
import { storeToRefs } from 'pinia'

const store = useBoardsStore()
const { currentBoard } = storeToRefs(store)
</script>

<template>
   <header>
      <h1>{{ currentBoard?.title }}</h1>
      <CustomButton>add new task</CustomButton>
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
      text-transform: capitalize;
      font-size: 1.7rem;
      font-weight: 600;
   }
}
</style>
