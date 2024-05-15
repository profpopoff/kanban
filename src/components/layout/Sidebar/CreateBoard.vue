<script setup lang="ts">
import { ref } from "vue";
import ButtonCustom from "../../ui/ButtonCustom.vue";
import InputCustom from "../../ui/InputCustom.vue";

const newBoard = ref({ id: "", title: "" });
</script>

<template>
   <div class="create-board">
      <h3>Create new board</h3>
      <div class="inputs">
         <InputCustom v-model:value="newBoard.title" label="title" id="create-board-id"
            placeholder="e.g. Marketing plan" />
      </div>
      <ButtonCustom>Create board</ButtonCustom>
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