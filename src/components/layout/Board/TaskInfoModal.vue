<script setup lang="ts">
import { toRefs } from "vue";
import type { Task } from "../../../types/Board";
import CheckboxCustom from "../../ui/CheckboxCustom.vue";

const { task } = defineProps<{ task: Task }>();
const { subtasks } = toRefs(task);

const handleSubtaskChange = (id: string) => {
  const newSubtasksValue = subtasks.value.map((subtask) => ({
    ...subtask,
    isDone: subtask.id === id ? !subtask.isDone : subtask.isDone,
  }));

  subtasks.value = newSubtasksValue;
};
</script>

<template>
  <div class="task-info">
    <h3>{{ task.title }}</h3>
    <p>{{ task.description }}</p>
    <div class="subtasks">
      <h4>
        Subtasks ({{ subtasks.filter(({ isDone }) => isDone).length }} of
        {{ subtasks.length }})
      </h4>
      <div class="checkbox-wrapper" v-for="{ id, title, isDone } in subtasks">
        <CheckboxCustom
          class="toggle"
          @on-change="handleSubtaskChange"
          :id="id"
          :isChecked="isDone"
        >
          {{ title }}
        </CheckboxCustom>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.task-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    opacity: 0.7;
    font-size: 0.9rem;
  }

  .subtasks {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    .checkbox-wrapper {
      padding: 0.7rem 1rem;
      border-radius: 0.3rem;
      background-color: hsl(var(--background-color));
    }
  }
}
</style>
