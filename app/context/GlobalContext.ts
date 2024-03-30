import { ToDoObject } from "@/types/todo";
import { createContext, useContext } from "react";
export type GlobalContent = {
    todos: ToDoObject[];
    setTodos: (c: ToDoObject[]) => void;
    currentCompletness: "all" | "done" | "undone";
    setCurrentCompletness: (cC: "all" | "done" | "undone") => void;
    searchQuery: string;
    setSearchQuery: (sQ: string) => void;
    order: "none" | "asc" | "desc";
    setOrder: (o: "none" | "asc" | "desc") => void;
};
export const GlobalContext = createContext<GlobalContent>({
    todos: [],
    setTodos: () => {},
    currentCompletness: "all",
    setCurrentCompletness: () => {},
    searchQuery: "",
    setSearchQuery: () => {},
    order: "none",
    setOrder: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
