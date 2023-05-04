<script setup lang="ts">
type ButtonType = "default" | "outlined"
defineProps<{ type?: ButtonType }>();
</script>

<template>
   <button class="custom-button" :class="type">
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
   font-weight: 700;
   text-transform: capitalize;
   line-height: 1;
   cursor: pointer;

   &.outlined {
      color: hsl(var(--accent-color));
      background-color: transparent;
      outline: 2px solid hsl(var(--accent-color));
   }

   &:empty {
      display: none;
   }
}
</style>