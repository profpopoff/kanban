<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

defineProps<{
  isActive: boolean;
}>();
const emit = defineEmits(["update:isActive"]);

const content = ref(null);
onClickOutside(content, () => emit("update:isActive", false));
</script>

<template>
  <transition name="outer-modal">
    <div class="modal" v-show="isActive">
      <transition name="inner-modal">
        <div class="content" v-show="isActive" ref="content">
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.outer-modal-enter-active,
.outer-modal-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.outer-modal-enter-from,
.outer-modal-leave-to {
  opacity: 0;
}

.inner-modal-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.inner-modal-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.inner-modal-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.inner-modal-leave-to {
  transform: scale(0.8);
}

.modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  background-color: hsla(0 0% 0% / 0.5);

  .content {
    max-height: 90vh;
    width: 30rem;
    padding: 2rem 2rem;
    overflow: auto;
    background-color: hsl(var(--element-color));
    border-radius: 0.5rem;
  }
}
</style>
