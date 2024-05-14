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
  <transition name="modal-fade">
    <div class="modal" v-if="isActive">
      <div class="content" ref="content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-fade-enter-active .content {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-fade-leave-active .content {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-fade-enter-from {
  opacity: 0;

  .content {
    opacity: 0;
    transform: scale(0.8);
  }
}
.modal-fade-leave-to {
  opacity: 0;

  .content {
    transform: scale(0.8);
  }
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
