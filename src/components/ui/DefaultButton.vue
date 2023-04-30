<script setup lang="ts">
defineProps({
   reverseColors: {
      type: Boolean,
   },
});
</script>

<template>
   <button class="custom-button" :class="{ 'reverse-colors': reverseColors }">
      <slot />
   </button>
</template>

<style scoped lang="scss">
.custom-button {
   height: 2.5rem;
   padding-inline: 1.5rem;
   border-radius: 2rem;
   border: none;
   background-color: hsl(var(--accent-color));
   color: #fff;
   font-size: 0.9rem;
   font-weight: 600;
   text-transform: capitalize;
   line-height: 1;
   cursor: pointer;

   &.reverse-colors {
      color: hsl(var(--accent-color));
      background-color: #fff;
   }

   &:empty {
      display: none;
   }
}
</style>