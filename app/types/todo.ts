export type ToDoObject = {
    id: string;
    name: string;
    priority: number;
    isDone: boolean;
};

export type CreateTodoObject = {
    name: string;
    priority: number;
    isDone: boolean;
};

export type EditTodoObject = {
    name: string;
    priority: number;
};
