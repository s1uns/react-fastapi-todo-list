"use client";

import React, { useEffect, useState } from "react";
import { ToDoItem } from "@/components/ToDoItem";
import { ToDoObject } from "@/types/todo";

export const ToDoList: React.FC = () => {
    const [todos, setTodos] = useState<ToDoObject[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTodos((todos) => data);
            });
    }, []);

    return (
        <div className="h-full mb-10">
            {todos.length > 0 ? (
                <table className="shadow-lg rounded bg-white border-separate w-full text-5xl">
                    <tbody>
                        <tr>
                            <th className="bg-blue-100 border px-8 py-4">
                                Title
                            </th>
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
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="w-full h-[700px] flex justify-center items-center text-9xl opacity-50 border-solid border-2 border-gray-500 rounded">
                    CREATE YOUR FIRST TASK
                </div>
            )}
        </div>
    );
};
