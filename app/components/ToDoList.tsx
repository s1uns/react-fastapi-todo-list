"use client";

import React, { useState } from "react";
import { ToDoItem } from "@/components/ToDoItem";
import { ToDoObject } from "@/types/todo";

export const ToDoList: React.FC = () => {
    const [todos, setTodos] = useState<ToDoObject[]>([
        { id: "1", name: "task 1", priority: 5, isDone: true },
        { id: "2", name: "task 2", priority: 10, isDone: false },
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
