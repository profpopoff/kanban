export default interface Board {
   id: string;
   title: string;
   boardIconId: number;
   columns: Column[];
}

export type Column = {
   id: string;
   title: string;
   tasks: Task[];
};

export type Task = {
   id: string;
   title: string;
   description: string;
   subtasks: Subtask[];
   status: string;
};

export type Subtask = {
   id: string;
   title: string;
   isDone: boolean;
};