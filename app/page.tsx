"use client";

import { ToDoList } from "@/components/ToDoList";
import { ControlPanel } from "@/components/ControlPanel";
import { ChooseTasksPanel } from "@/components/ChooseTasksPanel";
import { useState, useEffect } from "react";
import { ToDoObject } from "@/types/todo";
import { GlobalContext } from "./context/GlobalContext";

export default function Home() {
    const [todos, setTodos] = useState<ToDoObject[]>([]);
    const [currentCompletness, setCurrentCompletness] = useState<
        "all" | "done" | "undone"
    >("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [order, setOrder] = useState<"none" | "asc" | "desc">("none");

    useEffect(() => {
        fetch(
            `http://127.0.0.1:8000/todos/?completness=${currentCompletness}&searchQuery=${searchQuery}&order=${order}`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTodos((todos) => data);
            });
    }, [currentCompletness, searchQuery, order]);
    return (
        <GlobalContext.Provider
            value={{
                todos,
                setTodos,
                currentCompletness,
                setCurrentCompletness,
                searchQuery,
                setSearchQuery,
                order,
                setOrder,
            }}
        >
            <main>
                <ControlPanel />
                <ChooseTasksPanel />
                <ToDoList todos={todos} />
            </main>
        </GlobalContext.Provider>
    );
}
