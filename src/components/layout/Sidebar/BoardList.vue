<script setup lang="ts">
import { ref } from 'vue'
import BoardIcon from '../../icons/BoardIcon.vue'
import AddBoardIcon from '../../icons/AddBoardIcon.vue'
import { useBoardsStore } from '../../../stores/boards'
import { storeToRefs } from 'pinia'

const store = useBoardsStore()
const { boards, currentBoardId } = storeToRefs(store)
</script>

<template>
   <div class="boards">
      <h2>your boards ({{ boards.length }})</h2>
      <nav>
         <ul>
            <li v-for="board in boards">
               <input type="radio" :id="board.id.toString()" :value="board.id" v-model="currentBoardId" />
               <label class="board-button" :for="board.id.toString()">
                  <BoardIcon :boardIconId="board.boardIconId" class="icon" />
                  <span>{{ board.title }}</span>
               </label>
            </li>
         </ul>
      </nav>
      <button class="board-button new-board">
         <AddBoardIcon class="icon" />
         <span>create new board</span>
      </button>
   </div>
</template>

<style scoped lang="scss">
.boards {
   display: flex;
   flex-direction: column;

   h2 {
      margin-bottom: 1rem;
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
      color: hsl(var(--grey-color));
      cursor: pointer;
      transition: all .3s ease-in-out;

      &:hover {
         color: hsl(var(--accent-color));
      }

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
               isolation: isolate;

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
            }
         }
      }
   }

   .new-board {
      border: none;
      background-color: transparent;
      padding-inline: 0;
      padding-block: 1rem;
   }
}
</style>
