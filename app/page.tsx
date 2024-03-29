"use client";

import { ToDoList } from "@/components/ToDoList";
import { ControlPanel } from "@/components/ControlPanel";

export default function Home() {
    return (
        <main>
            <div className="text-center flex flex-col py-16">
                <ControlPanel />
            </div>
            <ToDoList />
        </main>
    );
}
