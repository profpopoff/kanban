<script setup lang="ts">
type ButtonType = "default" | "outlined" | "text";
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
  line-height: 1;
  cursor: pointer;
  transition: var(--dark-theme-transition);

  &:not(.text) {
    text-transform: capitalize;
  }

  &.outlined {
    font-weight: 400;
    color: hsl(var(--text-color));
    background-color: transparent;
    outline: 1px solid hsl(var(--text-color));
  }

  &.text {
    height: auto;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    text-align: left;
    color: hsl(var(--text-color));

    &:first-letter {
      text-transform: uppercase;
    }
  }

  &:empty {
    display: none;
  }
}
</style>
