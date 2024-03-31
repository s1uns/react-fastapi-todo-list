import { fetchTodos } from "@/services/api";
import { ToDoObject } from "@/types/todo";
import { createContext, useContext } from "react";
export type GlobalContent = {
    todos: ToDoObject[];
    setTodos: (c: ToDoObject[]) => void;
    currentCompletness: "all" | "done" | "undone";
    setCurrentCompletness: (cC: "all" | "done" | "undone") => void;
    searchString: string;
    setSearchString: (sQ: string) => void;
    order: "none" | "asc" | "desc";
    setOrder: (o: "none" | "asc" | "desc") => void;
    updateTodos: (
        currentCompletness: string,
        searchString: string,
        order: string,
        setTodos: (c: ToDoObject[]) => void
    ) => void;
};
export const GlobalContext = createContext<GlobalContent>({
    todos: [],
    setTodos: () => {},
    currentCompletness: "all",
    setCurrentCompletness: () => {},
    searchString: "",
    setSearchString: () => {},
    order: "none",
    setOrder: () => {},
    updateTodos: async (
        currentCompletness: string,
        searchString: string,
        order: string,
        setTodos: (c: ToDoObject[]) => void
    ) => {
        const response = await fetchTodos(
            currentCompletness,
            searchString,
            order
        );
        setTodos(response);
    },
});

export const useGlobalContext = () => useContext(GlobalContext);
