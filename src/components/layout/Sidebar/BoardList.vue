<script setup lang="ts">
import { ref } from 'vue';
import BoardIcon from '../../icons/BoardIcon.vue'

const currentBoard = ref('board1')
const boards = ref([{ id: 'board1', title: 'platform launch' }, { id: 'board2', title: 'marketing plan' }, { id: 'board3', title: 'roadmap' }, { id: 'board4', title: 'roadmap 2' }])
</script>

<template>
   <div class="boards">
      <h2>your boards ({{ boards.length }})</h2>
      <nav>
         <ul>
            <li v-for="board in boards">
               <input type="radio" :id="board.id" :value="board.id" v-model="currentBoard" />
               <label class="board-button" :for="board.id">
                  <BoardIcon class="icon" />
                  <span>{{ board.title }}</span>
               </label>
            </li>
         </ul>
      </nav>
      <button class="board-button new-board">
         <BoardIcon class="icon" />
         <span>create new board</span>
      </button>
   </div>
</template>

<style scoped lang="scss">
.boards {
   display: flex;
   flex-direction: column;
   gap: .5rem;

   /* &>* {
      outline: 1px solid red;
   } */

   h2 {
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 600;
      color: hsl(var(--grey-color));
   }

   .board-button {
      padding-block: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      text-transform: capitalize;
      cursor: pointer;

      .icon {
         height: 1.2rem;
      }

      span {
         font-size: 1rem;
         line-height: 1;
         font-weight: 600;

         -webkit-user-select: none;
         -ms-user-select: none;
         user-select: none;
      }
   }

   nav {
      ul {
         list-style: none;
         padding: 0;

         li {

            input[type="radio"] {
               position: fixed;
               opacity: 0;
               pointer-events: none;

               &:checked+label {
                  color: #fff;

                  &::before {
                     transform: translateX(0);
                     opacity: 1;
                  }
               }

               &:focus-visible+label {
                  outline: 2px solid hsl(var(--text-color));
                  border-radius: .1rem;
                  transition: none;
               }
            }

            label {
               position: relative;
               color: hsl(var(--grey-color));
               isolation: isolate;

               transition: all .3s ease-in-out;

               &::before {
                  content: '';
                  position: absolute;
                  inset: 0 0 0 calc(-1 * var(--padding-inline));
                  border-radius: 0 2rem 2rem 0;
                  background-color: hsl(var(--accent-color));
                  z-index: -1;

                  transform: translateX(-100%);
                  opacity: 0;
                  transition: all .3s ease-in-out;
               }

               &:hover {
                  color: hsl(var(--accent-color));
               }
            }
         }
      }
   }

   .new-board {
      border: none;
      background-color: transparent;
      padding: 0;
      color: hsl(var(--accent-color));
      padding-block: 1rem;
   }
}
</style>
