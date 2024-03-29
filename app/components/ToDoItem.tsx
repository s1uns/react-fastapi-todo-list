import { ToDoObject } from "@/types/todo";
import React from "react";
import { Button } from "@/components/Button";
import PriorityBar from "@/components/PriorityBar";

export const ToDoItem: React.FC<ToDoObject> = ({
    id,
    name,
    priority,
    isDone,
}) => {
    return (
        <tr
            className={
                isDone
                    ? `relative opacity-50 after:absolute after:px-5 after:left-[1%] after:top-2/4 after:h-px after:bg-black after:content-[""] after:w-[80%] `
                    : ""
            }
        >
            <td className="border px-8 py-4 ">{name}</td>
            <td className="border px-8 py-4">
                <PriorityBar priority={priority} isDone={isDone} />
            </td>
            <td className="border px-8 py-4">
                <div className="flex flex-row gap-5 justify-end">
                    <Button
                        handleClick={() => {}}
                        styles={"h-full "}
                        type={"button"}
                        title={"EDIT TASK"}
                        disabled={isDone}
                    >
                        EDIT TASK
                    </Button>
                    <Button
                        handleClick={() => {}}
                        styles={`h-full`}
                        type={"button"}
                        title={"DELETE TASK"}
                        disabled={isDone}
                    >
                        DELETE TASK{" "}
                    </Button>
                    <Button
                        handleClick={() => {}}
                        styles={`h-full w-1/4  `}
                        type={"button"}
                        title={"MARK AS DONE/UNDONE"}
                        disabled={false}
                    >
                        MARK AS {isDone ? "UNDONE" : "DONE"}
                    </Button>
                </div>
            </td>
        </tr>
        // {/* {name} {priority} {isDone ? "✅" : "❌"} */}
    );
};
