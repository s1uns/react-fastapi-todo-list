import { ToDoObject, CreateTodoObject, EditTodoObject } from "@/types/todo";
import axios from "axios";

const url: string = process.env.BACKEND_URL
    ? process.env.BACKEND_URL
    : "http://127.0.0.1:8000/";

export const fetchTodos = async (
    currentCompletness: string,
    searchString: string,
    order: string
) => {
    const { data } = await axios.get<ToDoObject[]>(
        `${url}todos?completness=${currentCompletness}&searchString=${searchString}&order=${order}`
    );

    return data;
};

export const createTodo = async (todo: CreateTodoObject) => {
    const { data } = await axios.post<string>(`${url}todos/`, todo);
    return data;
};

export const updateTodo = async (id: string, todo: EditTodoObject) => {
    const { data } = await axios.put<string>(`${url}todos/${id}`, todo);
    return data;
};

export const deleteTodo = async (id: string) => {
    const { data } = await axios.delete<string>(`${url}todos/${id}`);
    return data;
};

export const switchCompletness = async (id: string) => {
    const { data } = await axios.get(`${url}todos/switch-completeness/${id}`);
};
