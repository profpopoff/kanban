<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useBoardsStore } from "../../../stores/boards";
import DefaultButton from "../../ui/DefaultButton.vue";
import DefaultInput from "../../ui/DefaultInput.vue";
import Dropdown from "../../ui/Dropdown.vue";
import DefaultTextarea from "../../ui/DefaultTextarea.vue";
import { Task } from "../../../types/Board";

const store = useBoardsStore();
const { currentBoard } = storeToRefs(store);

const newTask = ref<Task>({
  id: "",
  title: "",
  description: "",
  subtasks: [{ id: Date.now().toString(), title: "", isDone: false }],
  status: currentBoard.value!.columns[0].title,
});

const submit = () => {
  console.log(newTask.value);
};
</script>

<template>
  <div class="add-task">
    <h3>Add new task</h3>
    <div class="inputs-container">
      <DefaultInput v-model:value="newTask.title" label="title" id="create-task-title"
        placeholder="e.g. Take coffee break" />
      <DefaultTextarea v-model:value="newTask.description" label="description" id="create-task-description"
        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little." />
      <DefaultButton reverse-colors>Add new subtask</DefaultButton>
      <Dropdown :options="currentBoard ? currentBoard.columns.map((column) => column.title) : []
        " v-model:selected="newTask.status" label="status" />
    </div>
    <DefaultButton @click="submit">Add task</DefaultButton>
  </div>
</template>

<style scoped lang="scss">
.add-task {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h3 {
    text-transform: capitalize;
    line-height: 1;
  }

  .inputs-container {
    padding-inline: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>