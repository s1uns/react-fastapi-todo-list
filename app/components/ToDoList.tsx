"use client";

import React, { useState } from "react";
import { ToDoItem, ToDoObject } from "@/components/ToDoItem";

export const ToDoList: React.FC = () => {
    const [todos, setTodos] = useState<ToDoObject[]>([
        { id: 1, name: "task 1", priority: 5, isDone: true },
        { id: 2, name: "task 2", priority: 3, isDone: false },
    ]);

    return (
        <div>
            {todos.map((item) => (
                <ToDoItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    priority={item.priority}
                    isDone={item.isDone}
                />
            ))}
        </div>
    );
};
