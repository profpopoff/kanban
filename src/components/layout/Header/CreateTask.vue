<script setup lang="ts">
import { ref } from "vue";
// import { storeToRefs } from "pinia";
// import { useBoardsStore } from "../../../stores/boards";
import ButtonCustom from "../../ui/ButtonCustom.vue";
import InputCustom from "../../ui/InputCustom.vue";
// import Dropdown from "../../ui/Dropdown.vue";
import TextAreaCustom from "../../ui/TextAreaCustom.vue";
import type { Task } from "../../../types/Board";
import { subtaskPlaceholders } from "../../../libs/subtaskPlaceholders";
import CloseIcon from "../../icons/CloseIcon.vue";

// const store = useBoardsStore();
// const { currentBoard } = storeToRefs(store);

const newTask = ref<Task>({
  id: `T-${Date.now()}`,
  title: "",
  description: "",
  subtasks: [
    { id: `ST-${Date.now()}`, title: "", isDone: false },
    { id: `ST-${Date.now() + 1}`, title: "", isDone: false },
  ],
  // status: currentBoard.value?.columns[0].title,
});

const createSubtask = () => {
  newTask.value.subtasks = [
    ...newTask.value.subtasks,
    { id: `ST-${Date.now()}`, title: "", isDone: false },
  ];
};

const deleteSubtask = (idToDelete: string) => {
  newTask.value.subtasks = newTask.value.subtasks.filter(
    (subtask) => subtask.id !== idToDelete
  );
};

const submit = () => {
  console.log(newTask.value.subtasks.map((subtask) => subtask.id));
};
</script>

<template>
  <div class="add-task">
    <h3>Add new task</h3>
    <div class="inputs-container">
      <InputCustom
        v-model:value="newTask.title"
        label="title"
        id="create-task-title"
        placeholder="e.g. Take coffee break"
      />
      <TextAreaCustom
        v-model:value="newTask.description"
        label="description"
        id="create-task-description"
        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
      />
      <div class="subtasks">
        <label :for="`subtask-${newTask?.subtasks?.at(0)?.id}`">subtasks</label>
        <div class="subtasks-inputs">
          <div
            class="subtask"
            v-for="(subtask, index) in newTask.subtasks"
            :key="subtask.id"
          >
            <InputCustom
              v-model:value="subtask.title"
              :id="`subtask-${subtask.id}`"
              :placeholder="`${subtaskPlaceholders.at(index) || ''}`"
            />
            <ButtonCustom
              class="delete-button"
              type="text"
              v-if="newTask.subtasks.length > 1"
              @click="deleteSubtask(subtask.id)"
            >
              <CloseIcon />
            </ButtonCustom>
          </div>
        </div>
        <ButtonCustom
          @click="createSubtask"
          id="subtask-create"
          type="outlined"
          class="add-subtask-btn"
          >Add new subtask
        </ButtonCustom>
      </div>
      <!-- <Dropdown
        :options="currentBoard?.columns?.map(({ title }) => title) ?? []"
        v-model:selected="newTask.status"
        label="status"
      /> -->
    </div>
    <ButtonCustom @click="submit">Add task</ButtonCustom>
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

    .subtasks {
      display: flex;
      flex-direction: column;

      &-inputs {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        .subtask {
          display: flex;
          position: relative;

          .delete-button {
            position: absolute;
            inset: 0 0 0 auto;
            width: 2.5rem;
            padding: 0.5rem;
            opacity: 0.5;
          }

          & > *:first-child {
            flex: 1;
          }
        }
      }

      .add-subtask-btn {
        margin-top: 0.75rem;
      }
    }
  }

  label {
    display: inline-block;
    width: fit-content;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1;

    &:empty {
      display: none;
    }
  }
}
</style>
