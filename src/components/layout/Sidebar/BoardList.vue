<script setup lang="ts">
import BoardIcon from "../../icons/BoardIcon.vue";
import AddBoardIcon from "../../icons/AddBoardIcon.vue";
import { useBoardsStore } from "../../../stores/boards";
import { storeToRefs } from "pinia";
import CreateBoard from "./CreateBoard.vue";
import { ref } from "vue";
import Modal from "../../ui/Modal.vue";

const store = useBoardsStore();
const { boards, currentBoardId } = storeToRefs(store);

const createBoardActive = ref(false);
const toggleCreateBoardModal = () =>
  (createBoardActive.value = !createBoardActive.value);
</script>

<template>
  <div class="boards">
    <h2>your boards ({{ boards.length }})</h2>
    <nav>
      <ul>
        <li v-for="{ id, boardIconId, title } in boards">
          <input type="radio" :id="id" :value="id" v-model="currentBoardId" />
          <label class="board-button" :for="id">
            <BoardIcon :boardIconId="boardIconId" class="icon" />
            <span>{{ title }}</span>
          </label>
        </li>
      </ul>
    </nav>
    <button class="board-button new-board" @click="toggleCreateBoardModal">
      <AddBoardIcon class="icon" />
      <span>create new board</span>
    </button>
    <Modal v-model:isActive="createBoardActive">
      <CreateBoard />
    </Modal>
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
    transition: all 0.3s ease-in-out;

    .icon {
      width: 1.2rem;
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

          &:checked + label {
            color: #fff;

            &::before {
              transform: translateX(0);
              opacity: 1;
            }
          }

          &:focus-visible + label {
            outline: 2px solid hsl(var(--text-color));
            border-radius: 0.1rem;
            transition: none;
          }
        }

        label {
          position: relative;
          isolation: isolate;

          &::before {
            content: "";
            position: absolute;
            inset: 0 0 0 calc(-1 * var(--padding-inline));
            border-radius: 0 2rem 2rem 0;
            background-color: hsl(var(--accent-color));
            z-index: -1;

            transform: translateX(-100%);
            opacity: 0;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
  }

  .new-board {
    color: hsl(var(--accent-color));
    border: none;
    background-color: transparent;
    padding-inline: 0;
    padding-block: 1rem;
  }
}
</style>
