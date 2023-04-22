<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useBoardsStore } from "../../../stores/boards";
import DefaultButton from "../../ui/DefaultButton.vue";
import DefaultInput from "../../ui/DefaultInput.vue";
import Dropdown from "../../ui/Dropdown.vue";
import DefaultTextarea from "../../ui/DefaultTextarea.vue";

const store = useBoardsStore();
const { currentBoard } = storeToRefs(store);

const newTask = ref({
  id: "",
  title: "",
  description: "",
  status: currentBoard.value!.columns[0].title,
});

const submit = () => {
  console.log(newTask.value);
};
</script>

<template>
  <div class="add-task">
    <h3>Add new task</h3>
    <div class="inputs">
      <DefaultInput v-model:value="newTask.title" label="title" id="create-task-title"
        placeholder="e.g. Take coffee break" />
      <DefaultTextarea v-model:value="newTask.description" label="description" id="create-task-description"
        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little." />
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

  .inputs {
    padding-inline: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>