<script setup lang="ts">
import { ref } from "vue";
import Modal from "../../ui/Modal.vue";
import { Task } from "../../../types/Board";
import CustomButton from "../../ui/CustomButton.vue";
import TaskInfoModal from "./TaskInfoModal.vue";

const { task } = defineProps<{ task: Task }>();
const { subtasks } = task;

const isTaskInfoActive = ref(false);
const toggleTaskInfoModal = () =>
  (isTaskInfoActive.value = !isTaskInfoActive.value);
</script>

<template>
  <li class="task">
    <CustomButton type="text" @click="toggleTaskInfoModal">{{
      task.title
    }}</CustomButton>
    <p>
      {{ subtasks.filter(({ isDone }) => isDone).length }} of
      {{ subtasks.length }} subtasks
    </p>
    <Modal v-model:isActive="isTaskInfoActive">
      <TaskInfoModal :task="task" />
    </Modal>
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

  button {
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.3;
    border: none;
    background-color: hsl(var(--element-color));
    cursor: pointer;
  }

  p {
    font-size: 0.8rem;
    font-weight: 600;
    color: hsl(var(--grey-color));
  }
}
</style>
