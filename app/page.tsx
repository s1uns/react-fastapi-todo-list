import { AddTask } from "@/components/AddTask";
import { ToDoList } from "@/components/ToDoList";

export default function Home() {
    return (
        <main>
            <div className="text-center flex flex-col">
                <h1 className="text-2xl font-b">My ToDo Application!</h1>
                <AddTask />
            </div>
            <ToDoList />
        </main>
    );
}
