<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "../../ui/CustomButton.vue";
import DefaultInput from "../../ui/DefaultInput.vue";

const newBoard = ref({ id: "", title: "" });
</script>

<template>
   <div class="create-board">
      <h3>Create new board</h3>
      <div class="inputs">
         <DefaultInput v-model:value="newBoard.title" label="title" id="create-board-id"
            placeholder="e.g. Marketing plan" />
      </div>
      <CustomButton>Create board</CustomButton>
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