"use client";

import React, { useState } from "react";
import { ToDoItem } from "@/components/ToDoItem";
import { ToDoObject } from "@/types/todo";

export const ToDoList: React.FC = () => {
    const [todos, setTodos] = useState<ToDoObject[]>([
        { id: "1", name: "task 1", priority: 1, isDone: true },
        { id: "2", name: "task 2", priority: 10, isDone: false },
        { id: "3", name: "task 3", priority: 2, isDone: true },
        { id: "4", name: "task 4", priority: 3, isDone: false },
        { id: "5", name: "task 5", priority: 4, isDone: true },
        { id: "6", name: "task 6", priority: 5, isDone: false },
        { id: "7", name: "task 7", priority: 6, isDone: true },
        { id: "8", name: "task 8", priority: 7, isDone: false },
        { id: "6", name: "task 6", priority: 8, isDone: false },
        { id: "7", name: "task 7", priority: 9, isDone: true },
        { id: "8", name: "task 8", priority: 7, isDone: false },
    ]);

    return (
        <div>
            <table className="shadow-lg bg-white border-separate w-full text-5xl">
                <tbody>
                    <tr>
                        <th className="bg-blue-100 border px-8 py-4">Title</th>
                        <th className="bg-blue-100 border px-8 py-4">
                            Priority
                        </th>
                        <th className="border text-left px-8 py-4"></th>
                    </tr>
                    {todos.map((item) => (
                        <ToDoItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            priority={item.priority}
                            isDone={item.isDone}
                        />
                    ))}{" "}
                </tbody>
            </table>
        </div>
    );
};
