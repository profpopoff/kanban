<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../../../stores/boards'
import DefaultButton from '../../ui/DefaultButton.vue'
import DefaultInput from '../../ui/DefaultInput.vue'
import Dropdown from '../../ui/Dropdown.vue'

const store = useBoardsStore()
const { currentBoard } = storeToRefs(store)

const newTask = ref({ id: '', title: '', status: currentBoard.value!.columns[0].title })
</script>

<template>
   <div class="add-task">
      <h3>Add new task</h3>
      <div class="inputs">
         <DefaultInput v-model:value="newTask.title" label="title" placeholder="e.g. Take coffee break" />
         <Dropdown :options="currentBoard ? currentBoard.columns.map(column => column.title) : []"
            v-model:selected="newTask.status" />
      </div>
      <DefaultButton>Add task</DefaultButton>
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
