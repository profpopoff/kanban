<script setup lang="ts">
import { Subtask, Task } from '../../../types/Board';

defineProps<{ task: Task }>()

</script>

<template>
   <li class="task">
      <h3>{{ task.title }}</h3>
      <p>{{ task.subtasks.filter((subtask: Subtask) => subtask.isDone).length }} of {{
         task.subtasks.length }} subtasks</p>
   </li>
</template>

<style scoped lang="scss">
.task {
   display: flex;
   flex-direction: column;
   gap: .5rem;
   padding: 1.5rem 1rem;
   background-color: hsl(var(--element-color));
   border-radius: .75rem;
   box-shadow: 0 .2rem .5rem hsl(var(--accent-color) / .2);

   transition: var(--dark-theme-transition);

   h3 {
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.3;

      &:first-letter {
         text-transform: uppercase;
      }
   }

   p {
      font-size: .8rem;
      font-weight: 600;
      color: hsl(var(--grey-color));
   }
}
</style>