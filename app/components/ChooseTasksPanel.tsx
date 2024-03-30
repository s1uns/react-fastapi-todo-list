import React, { useState, useRef } from "react";
import { Button } from "@/components/Button";
import { useGlobalContext } from "@/context/GlobalContext";

export const ChooseTasksPanel = () => {
    const { currentCompletness, setCurrentCompletness } = useGlobalContext();
    return (
        <div className="flex flex-row justify-center items-center h-40 w-full gap-1 mb-10 border-t-8">
            <Button
                handleClick={() => {
                    setCurrentCompletness("all");
                }}
                styles={`sort-btn ${
                    currentCompletness == "all" ? "active" : ""
                }`}
                type={"button"}
                title={"ALL TASKS"}
                disabled={false}
            >
                ALL
            </Button>
            <Button
                handleClick={() => {
                    setCurrentCompletness("done");
                }}
                styles={`sort-btn ${
                    currentCompletness == "done" ? "active" : ""
                }`}
                type={"button"}
                title={"DONE TASKS"}
                disabled={false}
            >
                DONE
            </Button>
            <Button
                handleClick={() => {
                    setCurrentCompletness("undone");
                }}
                styles={`sort-btn ${
                    currentCompletness == "undone" ? "active" : ""
                }`}
                type={"button"}
                title={"UNDONE TASKS"}
                disabled={false}
            >
                UNDONE
            </Button>
        </div>
    );
};
