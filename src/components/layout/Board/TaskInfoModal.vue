<script setup lang="ts">
import { ref, toRefs } from "vue";
import { Task } from "../../../types/Board";
import DefaultToggle from "../../ui/DefaultToggle.vue";

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
    <h4>
      Subtasks ({{ subtasks.filter(({ isDone }) => isDone).length }} of
      {{ subtasks.length }})
    </h4>
    <DefaultToggle
      class="toggle"
      v-for="{ id, title, isDone } in subtasks"
      @on-change="handleSubtaskChange"
      :id="id"
      :isChecked="isDone"
      >{{ title }}</DefaultToggle
    >
  </div>
</template>

<style scoped lang="scss"></style>
