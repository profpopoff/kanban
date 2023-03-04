<template>
   <button class="custom-button">
      <slot />
   </button>
</template>

<style scoped lang="scss">
.custom-button {
   padding: 1rem 1.5rem;
   border-radius: 2rem;
   border: none;
   background-color: hsl(var(--accent-color));
   color: #fff;
   font-weight: 600;
   text-transform: capitalize;
   line-height: 1;
   cursor: pointer;

   &:empty {
      display: none;
   }
}
</style>