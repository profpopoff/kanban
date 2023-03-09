import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useBoardsStore = defineStore('boards', () => {
    const boards = ref([{
        id: new Date().valueOf(),
        title: 'learn to use kanban',
        boardIconId: 3,
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
                        subtasks: [{ title: 'subtask 1', isDone: false }, { title: 'subtask 1', isDone: false }]
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
    }, {
        id: new Date().valueOf() + 1,
        title: 'help',
        boardIconId: 1,
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
                    }
                ]
            },
            {
                title: 'done',
                tasks: [
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
    }])
    const currentBoardId = ref(boards.value[0].id)

    const currentBoard = computed(() => boards.value.find(board => board.id === currentBoardId.value))

    return { boards, currentBoardId, currentBoard }
})
