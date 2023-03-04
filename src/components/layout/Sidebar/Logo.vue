<script setup lang="ts">
import KanbanIcon from '../../icons/KanbanIcon.vue'

</script>

<template>
   <div class="logo">
      <KanbanIcon class="icon" />
      <span>kanban</span>
   </div>
</template>

<style scoped lang="scss">
.logo {
   $logo-height: 2rem;

   height: $logo-height;
   display: flex;
   gap: 1rem;

   .icon {
      font-size: $logo-height;
      padding-block: .15em .05em;
   }

   span {
      font-size: $logo-height;
      line-height: 1;
      font-weight: 700;

      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
   }
}
</style>
