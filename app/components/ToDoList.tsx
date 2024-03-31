"use client";

import React, { useEffect, useState } from "react";
import { ToDoItem } from "@/components/ToDoItem";
import { ToDoObject } from "@/types/todo";

interface ListProps {
    todos: ToDoObject[];
}

export const ToDoList: React.FC<ListProps> = ({ todos }: ListProps) => {
    return (
        <div className="h-full mb-10">
            {todos.length > 0 ? (
                <table className="shadow-lg rounded-3xl bg-white border-separate w-full text-5xl">
                    <tbody className="[&>*]:last:[&>*]:rounded-b-3xl">
                        <tr>
                            <th className="bg-blue-100 border px-8 py-4 rounded-tl-3xl">
                                Title
                            </th>
                            <th className="bg-blue-100 border px-8 py-4">
                                Priority
                            </th>
                            <th className="border text-left px-8 py-4 rounded-tr-3xl"></th>
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
                <div className="h-[700px] flex justify-center items-center text-9xl opacity-50 border-gray-500">
                    CREATE YOUR FIRST TASK
                </div>
            )}
        </div>
    );
};
