export default interface Board {
   id: number;
   title: string;
   boardIconId: number;
   columns: Column[];
}

export type Column = {
   title: string;
   tasks: Task[];
};

export type Task = {
   title: string;
   description: string;
   subtasks: Subtask[];
};

export type Subtask = {
   title: string;
   isDone: boolean;
};