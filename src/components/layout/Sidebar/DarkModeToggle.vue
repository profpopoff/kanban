<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import SunIcon from '../../icons/SunIcon.vue'
import MoonIcon from '../../icons/MoonIcon.vue'
import DefaultToggle from '../../ui/DefaultToggle.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
   <div class="dark-mode-toggle">
      <SunIcon class="icon" @click="toggleDark()" />
      <DefaultToggle class="toggle" @change="toggleDark()" :isChecked="isDark" />
      <MoonIcon class="icon" @click="toggleDark()" />
   </div>
</template>

<style scoped lang="scss">
.dark-mode-toggle {
   display: flex;
   justify-content: center;
   gap: 1rem;
   height: 3rem;
   padding: .875rem;
   border-radius: .3em;
   background-color: hsl(var(--background-color));
   transition: var(--dark-theme-transition);

   .toggle {
      --default-color: var(--accent-color);
      --checked-color: var(--accent-color);
   }

   .icon {
      cursor: pointer;
   }
}
</style>