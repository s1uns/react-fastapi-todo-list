import { ToDoObject, CreateTodoObject, EditTodoObject } from "@/types/todo";
import axios from "axios";

const url: string = "http://127.0.0.1:8000/todos";

export const fetchTodos = async (
    currentCompletness: string,
    searchString: string,
    order: string
) => {
    const { data } = await axios.get<ToDoObject[]>(
        `${url}/?completness=${currentCompletness}&searchString=${searchString}&order=${order}`
    );

    return data;
};

export const createTodo = async (todo: CreateTodoObject) => {
    const { data } = await axios.post<string>(`${url}/`, todo);
    return data;
};

export const updateTodo = async (id: string, todo: EditTodoObject) => {
    const { data } = await axios.put<string>(`${url}/${id}`, todo);
    return data;
};

export const deleteTodo = async (id: string) => {
    const { data } = await axios.delete<string>(`${url}/${id}`);
    return data;
};

export const switchCompletness = async (id: string) => {
    const { data } = await axios.get(`${url}/switch-completeness/${id}`);
};
