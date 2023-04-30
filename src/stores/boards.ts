import { defineStore } from "pinia";
import { computed, ref } from "vue";
import Board from "../types/Board";

export const useBoardsStore = defineStore("boards", () => {
  const boards = ref<Board[]>([
    {
      id: 'board-1',
      title: "learn to use kanban",
      boardIconId: 3,
      columns: [
        {
          id: 'column-1',
          title: "todo",
          tasks: [
            {
              id: 'task-1',
              title: "Build UI for onboard flow",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'todo',
              subtasks: [
                { id: 'subtask-1', title: "subtask 1", isDone: false },
                { id: 'subtask-2', title: "subtask 2", isDone: false },
                { id: 'subtask-3', title: "subtask 3", isDone: false },
              ],
            },
            {
              id: 'task-2',
              title: "Build UI for search",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'todo',
              subtasks: [
                { id: 'subtask-4', title: "subtask 1", isDone: false },
                { id: 'subtask-5', title: "subtask 1", isDone: false },
              ],
            },
            {
              id: 'task-3',
              title: "Build settings UI",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'todo',
              subtasks: [
                { id: 'subtask-6', title: "subtask 1", isDone: false },
                { id: 'subtask-7', title: "subtask 2", isDone: false },
              ],
            },
          ],
        },
        {
          id: 'column-2',
          title: "doing",
          tasks: [
            {
              id: 'task-4',
              title: "Lorem ipsum dolor 1",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'doing',
              subtasks: [
                { id: 'subtask-8', title: "subtask 1", isDone: true },
                { id: 'subtask-9', title: "subtask 2", isDone: false },
                { id: 'subtask-10', title: "subtask 3", isDone: false },
              ],
            },
            {
              id: 'task-5',
              title: "Lorem ipsum dolor 3",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'doing',
              subtasks: [
                { id: 'subtask-11', title: "subtask 1", isDone: true },
                { id: 'subtask-12', title: "subtask 2", isDone: false },
              ],
            },
          ],
        },
        {
          id: 'column-3',
          title: "done",
          tasks: [
            {
              id: 'task-6',
              title: "Lorem ipsum dolor 1",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'done',
              subtasks: [
                { id: 'subtask-13', title: "subtask 1", isDone: true },
                { id: 'subtask-14', title: "subtask 2", isDone: true },
                { id: 'subtask-15', title: "subtask 3", isDone: true },
              ],
            },
            {
              id: 'task-7',
              title: "Lorem ipsum dolor 2",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'done',
              subtasks: [
                { id: 'subtask-16', title: "subtask 1", isDone: true },
                { id: 'subtask-17', title: "subtask 1", isDone: true },
              ],
            },
            {
              id: 'task-8',
              title: "Lorem ipsum dolor 3",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'done',
              subtasks: [{ id: 'subtask-18', title: "subtask 1", isDone: true }],
            },
            {
              id: 'task-9',
              title: "Lorem ipsum dolor 5",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'done',
              subtasks: [{ id: 'subtask-19', title: "subtask 1", isDone: true }],
            },
          ],
        },
      ],
    },
    {
      id: 'board-2',
      title: "help",
      boardIconId: 1,
      columns: [
        {
          id: 'column-1',
          title: "todo",
          tasks: [
            {
              id: 'task-1',
              title: "Build UI for onboard flow",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'todo',
              subtasks: [
                { id: 'subtask-1', title: "subtask 1", isDone: false },
                { id: 'subtask-2', title: "subtask 2", isDone: false },
                { id: 'subtask-3', title: "subtask 3", isDone: false },
              ],
            },
            {
              id: 'task-2',
              title: "Build UI for search",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'todo',
              subtasks: [{ id: 'subtask-4', title: "subtask 1", isDone: false }],
            },
            {
              id: 'task-3',
              title: "Build settings UI",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'todo',
              subtasks: [
                { id: 'subtask-5', title: "subtask 1", isDone: false },
                { id: 'subtask-6', title: "subtask 2", isDone: false },
              ],
            },
          ],
        },
        {
          id: 'column-2',
          title: "doing",
          tasks: [
            {
              id: 'task-4',
              title: "Lorem ipsum dolor 1",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'doing',
              subtasks: [
                { id: 'subtask-7', title: "subtask 1", isDone: true },
                { id: 'subtask-8', title: "subtask 2", isDone: false },
                { id: 'subtask-9', title: "subtask 3", isDone: false },
              ],
            },
          ],
        },
        {
          id: 'column-3',
          title: "done",
          tasks: [
            {
              id: 'task-5',
              title: "Lorem ipsum dolor 2",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'done',
              subtasks: [
                { id: 'subtask-10', title: "subtask 1", isDone: true },
                { id: 'subtask-11', title: "subtask 1", isDone: true },
              ],
            },
            {
              id: 'task-6',
              title: "Lorem ipsum dolor 3",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'done',
              subtasks: [{ id: 'subtask-12', title: "subtask 1", isDone: true }],
            },
            {
              id: 'task-7',
              title: "Lorem ipsum dolor 5",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              status: 'done',
              subtasks: [{ id: 'subtask-13', title: "subtask 1", isDone: true }],
            },
          ],
        },
      ],
    },
  ]);
  const currentBoardId = ref<string>(boards.value[0].id);

  const currentBoard = computed(() =>
    boards.value.find((board: Board) => board.id === currentBoardId.value)
  );

  return { boards, currentBoardId, currentBoard };
});
