import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type Board from "../types/Board";

export const useBoardsStore = defineStore("boards", () => {
  const boards = ref<Board[]>([
    {
      id: "1",
      title: "board-1",
      boardIconId: 3,
      columns: [
        {
          id: "2",
          title: "column-1-b1",
          tasks: [
            {
              id: "3",
              title: "task-1-c1-b1",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "todo",
              subtasks: [
                { id: "4", title: "subtask-1-t1-c1-b1", isDone: false },
                { id: "5", title: "subtask-2-t1-c1-b1", isDone: false },
                { id: "6", title: "subtask-3-t1-c1-b1", isDone: false },
              ],
            },
            {
              id: "7",
              title: "task-2-c1-b1",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "todo",
              subtasks: [
                { id: "8", title: "subtask-1-t2-c1-b1", isDone: false },
                { id: "9", title: "subtask-2-t2-c1-b1", isDone: false },
              ],
            },
            {
              id: "10",
              title: "task-3-c1-b1",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "todo",
              subtasks: [
                { id: "11", title: "subtask-1-t3-c1-b1", isDone: false },
                { id: "12", title: "subtask-2-t3-c1-b1", isDone: false },
              ],
            },
          ],
        },
        {
          id: "13",
          title: "column-2-b1",
          tasks: [
            {
              id: "14",
              title: "task-1-c2-b1",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "doing",
              subtasks: [
                { id: "15", title: "subtask-1-t1-c2-b1", isDone: true },
                { id: "16", title: "subtask-2-t1-c2-b1", isDone: false },
                {
                  id: "17",
                  title: "subtask-3-t1-c2-b1",
                  isDone: false,
                },
              ],
            },
            {
              id: "18",
              title: "task-2-c2-b1",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "doing",
              subtasks: [
                { id: "19", title: "subtask 1-t2-c2-b1", isDone: true },
                { id: "20", title: "subtask 2-t2-c2-b1", isDone: false },
              ],
            },
          ],
        },
        {
          id: "21",
          title: "column-3-b1",
          tasks: [
            {
              id: "22",
              title: "task-1-c3-b1",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "done",
              subtasks: [
                { id: "23", title: "subtask 1-t1-c3-b1", isDone: true },
                { id: "24", title: "subtask 2-t1-c3-b1", isDone: true },
                { id: "25", title: "subtask 3-t1-c3-b1", isDone: true },
              ],
            },
            {
              id: "26",
              title: "task-2-c3-b1",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "done",
              subtasks: [
                { id: "27", title: "subtask 1-t2-c3-b1", isDone: true },
                { id: "28", title: "subtask 1-t2-c3-b1", isDone: true },
              ],
            },
            {
              id: "29",
              title: "task-3-c3-b1",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "done",
              subtasks: [
                { id: "30", title: "subtask 1-t3-c3-b1", isDone: true },
              ],
            },
            {
              id: "31",
              title: "task-4-c3-b1",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "done",
              subtasks: [
                { id: "32", title: "subtask 1-t3-c3-b1", isDone: true },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "33",
      title: "board-2",
      boardIconId: 1,
      columns: [
        {
          id: "34",
          title: "column-1-b2",
          tasks: [
            {
              id: "35",
              title: "task-1-c1-b2",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "todo",
              subtasks: [
                { id: "36", title: "subtask 1", isDone: false },
                { id: "37", title: "subtask 2", isDone: false },
                { id: "38", title: "subtask 3", isDone: false },
              ],
            },
            {
              id: "39",
              title: "Build UI for search",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "todo",
              subtasks: [{ id: "40", title: "subtask 1", isDone: false }],
            },
            {
              id: "41",
              title: "Build settings UI",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "todo",
              subtasks: [
                { id: "42", title: "subtask 1", isDone: false },
                { id: "43", title: "subtask 2", isDone: false },
              ],
            },
          ],
        },
        {
          id: "44",
          title: "doing",
          tasks: [
            {
              id: "45",
              title: "Lorem ipsum dolor 1",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "doing",
              subtasks: [
                { id: "46", title: "subtask 1", isDone: true },
                { id: "47", title: "subtask 2", isDone: false },
                { id: "48", title: "subtask 3", isDone: false },
              ],
            },
          ],
        },
        {
          id: "49",
          title: "done",
          tasks: [
            {
              id: "50",
              title: "Lorem ipsum dolor 2",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "done",
              subtasks: [
                { id: "51", title: "subtask 1", isDone: true },
                { id: "52", title: "subtask 1", isDone: true },
              ],
            },
            {
              id: "53",
              title: "Lorem ipsum dolor 3",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "done",
              subtasks: [{ id: "54", title: "subtask 1", isDone: true }],
            },
            {
              id: "55",
              title: "Lorem ipsum dolor 5",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              // status: "done",
              subtasks: [{ id: "56", title: "subtask 1", isDone: true }],
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
