<script setup lang="ts">
type ButtonType = "default" | "outlined";
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
    font-weight: 400;
    color: hsl(var(--text-color));
    background-color: transparent;
    outline: 1px solid hsl(var(--text-color));
  }

  &:empty {
    display: none;
  }
}
</style>
