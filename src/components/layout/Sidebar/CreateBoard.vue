<script setup lang="ts">
import { ref } from "vue";
import ButtonCustom from "../../ui/ButtonCustom.vue";
import InputCustom from "../../ui/InputCustom.vue";
import { useBoardsStore } from "../../../stores/boards";
import { storeToRefs } from "pinia";
import { randomNumFromInterval } from "../../../libs/randomNum";

// const { toggleModal } = defineProps<{ toggleModal: () => void }>();
const emit = defineEmits(["toggle-modal"]);

const store = useBoardsStore();
const { boards } = storeToRefs(store);

const newBoard = ref({
  id: `B-${Date.now()}`,
  title: "",
  boardIconId: randomNumFromInterval(1, 6),
  columns: [
    {
      id: `C-${Date.now()}`,
      title: "todo",
    },
    {
      id: `C-${Date.now() + 1}`,
      title: "doing",
    },
    {
      id: `C-${Date.now() + 2}`,
      title: "done",
    },
  ],
});

const createBoard = () => {
  boards.value = [...boards.value, newBoard.value];
  emit("toggle-modal");
};
</script>

<template>
  <div class="create-board">
    <h3>Create new board</h3>
    <div class="inputs">
      <InputCustom
        v-model:value="newBoard.title"
        label="title"
        id="create-board-id"
        placeholder="e.g. Marketing plan"
      />
    </div>
    <ButtonCustom @click="createBoard">Create board</ButtonCustom>
  </div>
</template>

<style scoped lang="scss">
.create-board {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h3 {
    text-transform: capitalize;
    line-height: 1;
  }

  .inputs {
    padding-inline: 1rem;
  }
}
</style>
