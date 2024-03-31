"use client";

import { ToDoList } from "@/components/ToDoList";
import { ControlPanel } from "@/components/ControlPanel";
import { ChooseTasksPanel } from "@/components/ChooseTasksPanel";
import { useState, useEffect } from "react";
import { ToDoObject } from "@/types/todo";
import { GlobalContext } from "./context/GlobalContext";
import { fetchTodos } from "./services/api";

export default function Home() {
    const [todos, setTodos] = useState<ToDoObject[]>([]);
    const [currentCompletness, setCurrentCompletness] = useState<
        "all" | "done" | "undone"
    >("all");
    const [searchString, setSearchString] = useState<string>("");
    const [order, setOrder] = useState<"none" | "asc" | "desc">("none");

    const updateTodos = async (
        currentCompletness: string,
        searchString: string,
        order: string
    ) => {
        const response = await fetchTodos(
            currentCompletness,
            searchString,
            order
        );
        setTodos(response);
    };

    useEffect(() => {
        updateTodos(currentCompletness, searchString, order);
    }, [currentCompletness, searchString, order]);

    return (
        <GlobalContext.Provider
            value={{
                todos,
                setTodos,
                currentCompletness,
                setCurrentCompletness,
                searchString,
                setSearchString,
                order,
                setOrder,
                updateTodos,
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
