<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import ArrowIcon from "../icons/ArrowIcon.vue";

defineProps<{
  options: any[];
  selected: string;
  label?: string;
}>();

defineEmits(["update:selected"]);

const isOpen = ref(false);

const dropdown = ref(null);
onClickOutside(dropdown, () => (isOpen.value = false));
</script>

<template>
  <div class="container">
    <label :for="label">{{ label }}</label>
    <div class="dropdown" ref="dropdown">
      <button :id="label" @click="isOpen = !isOpen">
        {{ selected }}
        <ArrowIcon class="icon" :class="{ open: isOpen }" />
      </button>
      <transition name="options">
        <ul class="options" v-show="isOpen">
          <li
            class="option"
            v-for="(option, index) of options.filter(
              (option) => option !== selected
            )"
            :key="index"
          >
            <button
              @click="
                $emit('update:selected', option);
                isOpen = false;
              "
            >
              {{ option }}
            </button>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    width: fit-content;
    text-transform: capitalize;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1;

    &:empty {
      display: none;
    }
  }

  .dropdown {
    $height: 2.5rem;
    $padding: 1rem;
    $border-radius: 0.25rem;

    position: relative;
    height: $height;
    isolation: isolate;

    button {
      position: relative;
      height: 100%;
      width: 100%;
      padding-inline: $padding;
      background-color: hsl(var(--element-color));
      border-radius: $border-radius;
      border: 1px solid hsl(var(--grey-color));
      text-align: start;
      text-transform: capitalize;
      cursor: pointer;
      transition: color 0.15s ease-in-out;

      .icon {
        position: absolute;
        top: 50%;
        right: $padding;
        height: 25%;
        transform: translateY(-50%) rotate(-180deg);
        transition: transform 0.3s ease-in-out;

        &.open {
          transform: translateY(-50%) rotate(0);
        }
      }
    }

    .options-enter-active,
    .options-leave-active {
      transition: all 0.3s ease-in-out;
    }

    .options-enter-from,
    .options-leave-to {
      transform: translateY(calc(-100% + $height)) rotateX(-90deg);
    }

    .options {
      position: absolute;
      inset: 100% $border-radius auto;
      padding: 0;
      z-index: -1;
      list-style: none;
      border-radius: 0 0 $border-radius $border-radius;
      border: 1px solid hsl(var(--grey-color));
      border-top: none;
      background-color: hsl(var(--element-color));

      padding-block: calc($padding * 0.33);

      .option {
        height: $height;
        width: 100%;
        display: inline-flex;
        align-items: center;
        text-transform: capitalize;
        cursor: pointer;
        transition: color 0.15s ease-in-out;

        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;

        &:hover button {
          color: hsl(var(--accent-color));
        }

        button {
          border: none;
          padding-inline: $padding;

          &:focus-visible {
            z-index: +1;
          }
        }
      }
    }
  }
}
</style>
