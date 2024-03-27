import React from "react";

export type ToDoObject = {
    id: number;
    name: string;
    priority: number;
    isDone: boolean;
};

export const ToDoItem: React.FC<ToDoObject> = ({id, name, priority, isDone }) => {
    return (
        <div>
            {name} {priority} {isDone ? "✅" : "❌"}
        </div>
    );
};
