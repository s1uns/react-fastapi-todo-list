"use client";

import { ToDoList } from "@/components/ToDoList";
import { ControlPanel } from "@/components/ControlPanel";
import { ChooseTasksPanel } from "@/components/ChooseTasksPanel";
import { useState, useEffect } from "react";
import { ToDoObject } from "@/types/todo";
import { GlobalContext } from "./context/GlobalContext";
import { fetchTodos } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        const response = fetchTodos(currentCompletness, searchString, order);

        response
            .then((data) => {
                setTodos(data);
            })
            .catch((error: any) => {
                if (error.response) {
                    toast.error(error.response.data);
                }
            });
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
                <ToastContainer className={"text-3xl w-full w-max-full"} />
                <ControlPanel />
                <ChooseTasksPanel />
                <ToDoList todos={todos} />
            </main>
        </GlobalContext.Provider>
    );
}
