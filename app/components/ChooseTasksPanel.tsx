import React, { useState, useRef } from "react";
import { Button } from "@/components/Button";

export const ChooseTasksPanel = () => {
    const [selectedButton, setSelectedButton] = useState(0);

    return (
        <div className="flex flex-row justify-center items-center h-40 w-full gap-1 mb-10 border-t-8">
            <Button
                handleClick={() => {
                    setSelectedButton((v) => 0);
                }}
                styles={`sort-btn ${selectedButton == 0 ? "active" : ""}`}
                type={"button"}
                title={"ALL TASKS"}
                disabled={false}
            >
                ALL
            </Button>
            <Button
                handleClick={() => {
                    setSelectedButton((v) => 1);
                }}
                styles={`sort-btn ${selectedButton == 1 ? "active" : ""}`}
                type={"button"}
                title={"DONE TASKS"}
                disabled={false}
            >
                DONE
            </Button>
            <Button
                handleClick={() => {
                    setSelectedButton((v) => 2);
                }}
                styles={`sort-btn ${selectedButton == 2 ? "active" : ""}`}
                type={"button"}
                title={"UNDONE TASKS"}
                disabled={false}
            >
                UNDONE
            </Button>
        </div>
    );
};
