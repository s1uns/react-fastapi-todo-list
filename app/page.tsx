"use client";

import { ToDoList } from "@/components/ToDoList";
import { ControlPanel } from "@/components/ControlPanel";
import { ChooseTasksPanel } from "@/components/ChooseTasksPanel";

export default function Home() {
    return (
        <main>
            <ControlPanel />
            <ChooseTasksPanel />
            <ToDoList />
        </main>
    );
}
