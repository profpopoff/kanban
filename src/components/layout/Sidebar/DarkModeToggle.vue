<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import CustomToggle from '../../ui/CustomToggle.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
   <CustomToggle class="toggle" @change="toggleDark()" :isChecked="isDark">{{ isDark ? 'dark' : 'light' }}</CustomToggle>
</template>

<style scoped lang="scss"></style>