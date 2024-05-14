<script setup lang="ts">
import { Subtask, Task } from "../../../types/Board";

const { task } = defineProps<{ task: Task }>();
const { subtasks } = task;
</script>

<template>
  <li class="task">
    <h3>{{ task.title }}</h3>
    <p>
      {{ subtasks.filter(({ isDone }) => isDone).length }} of
      {{ subtasks.length }} subtasks
    </p>
  </li>
</template>

<style scoped lang="scss">
.task {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
  background-color: hsl(var(--element-color));
  border-radius: 0.75rem;
  box-shadow: 0 0.2rem 0.5rem hsl(var(--accent-color) / 0.2);

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
    font-size: 0.8rem;
    font-weight: 600;
    color: hsl(var(--grey-color));
  }
}
</style>
