<script setup lang="ts">
import { ref } from 'vue'
import Task from './Task.vue'
import { useBoardsStore } from '../../../stores/boards'
import { storeToRefs } from 'pinia'

const store = useBoardsStore()
const { currentBoard } = storeToRefs(store)
</script>

<template>
   <ul class="columns">
      <li v-for="column in currentBoard?.columns" class="column">
         <div class="headline">
            <span></span>
            <h2>{{ column.title }} ({{ column.tasks.length }})</h2>
         </div>
         <ul class="tasks">
            <Task v-for="task in column.tasks" :task="task" />
         </ul>
      </li>
   </ul>
</template>

<style scoped lang="scss">
ul {
   list-style: none;
   padding: 0;
}

.columns {
   display: flex;
   gap: 1.5rem;

   .column {
      width: 17.5rem;

      .headline {
         display: flex;
         gap: .5rem;
         align-items: center;
         margin-bottom: 1.5rem;

         span {
            display: block;
            width: 1rem;
            aspect-ratio: 1;
            border-radius: 50%;
            background-color: rebeccapurple;
         }

         h2 {
            text-transform: uppercase;
            font-size: .8rem;
            font-weight: 600;
            color: hsl(var(--grey-color));
            line-height: 1;
            letter-spacing: .16rem;
         }
      }

      .tasks {
         display: flex;
         flex-direction: column;
         gap: 1.25rem;
      }
   }
}
</style>
