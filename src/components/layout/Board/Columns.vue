<script setup lang="ts">
import { ref } from 'vue'
import Task from './Task.vue';

const board = ref({
   title: '123123',
   columns: [
      {
         title: 'todo',
         tasks: [
            {
               title: 'Build UI for onboard flow',
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
               subtasks: [{ title: 'subtask 1', isDone: false }, { title: 'subtask 2', isDone: false }, { title: 'subtask 3', isDone: false }]
            },
            {
               title: 'Build UI for search',
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
               subtasks: [{ title: 'subtask 1', isDone: false }]
            },
            {
               title: 'Build settings UI',
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
               subtasks: [{ title: 'subtask 1', isDone: false }, { title: 'subtask 2', isDone: false }]
            }
         ]
      },
      {
         title: 'doing',
         tasks: [
            {
               title: 'Lorem ipsum dolor 1',
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
               subtasks: [{ title: 'subtask 1', isDone: true }, { title: 'subtask 2', isDone: false }, { title: 'subtask 3', isDone: false }]
            },
            {
               title: 'Lorem ipsum dolor 3',
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
               subtasks: [{ title: 'subtask 1', isDone: true }, { title: 'subtask 2', isDone: false }]
            }
         ]
      },
      {
         title: 'done',
         tasks: [
            {
               title: 'Lorem ipsum dolor 1',
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
               subtasks: [{ title: 'subtask 1', isDone: true }, { title: 'subtask 2', isDone: true }, { title: 'subtask 3', isDone: true }]
            },
            {
               title: 'Lorem ipsum dolor 2',
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
               subtasks: [{ title: 'subtask 1', isDone: true }, { title: 'subtask 1', isDone: true }]
            },
            {
               title: 'Lorem ipsum dolor 3',
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
               subtasks: [{ title: 'subtask 1', isDone: true }]
            },
            {
               title: 'Lorem ipsum dolor 5',
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
               subtasks: [{ title: 'subtask 1', isDone: true }]
            }
         ]
      }
   ]
})
</script>

<template>
   <ul class="columns">
      <li v-for="column in board.columns" class="column">
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
