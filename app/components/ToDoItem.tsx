import { ToDoObject } from "@/types/todo";
import React, { useState } from "react";
import { Button } from "@/components/Button";
import PriorityBar from "@/components/PriorityBar";
import { Modal } from "@/components/Modal";
import { Slider } from "@/components/Slider";

export const ToDoItem: React.FC<ToDoObject> = ({
    id,
    name,
    priority,
    isDone,
}) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [editTaskValue, setEditTaskValue] = useState<string>(name);
    const [editPriorityValue, setEditPriorityValue] =
        useState<number>(priority);

    const updateSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditPriorityValue((oldPriority) => 11 - +e.target.value);
    };

    return (
        <tr className={` text-white ${isDone ? `bg-slate-200 ` : ""}`}>
            <td
                className={`text-black border px-8 py-4 w-1/3 ${
                    isDone ? `opacity-50 ` : ""
                }`}
            >
                {name}
            </td>
            <td className="border px-8 py-4 w-1/4">
                <PriorityBar priority={priority} isDone={isDone} />
            </td>
            <td className="border px-8 py-4">
                <div className="flex flex-row gap-5 justify-end items-center">
                    <div
                        className={`w-1/4 flex justify-end ${
                            isDone && "cursor-not-allowed"
                        } `}
                    >
                        <Button
                            handleClick={() => {
                                setEditTaskValue(name);
                                setEditPriorityValue(priority);
                                setModalOpen(true);
                            }}
                            styles={"h-full w-full text-white"}
                            type={"button"}
                            title={"EDIT TASK"}
                            disabled={isDone}
                        >
                            EDIT TASK
                        </Button>
                        <Modal
                            modalOpen={modalOpen}
                            setModalOpen={setModalOpen}
                            title={"Update task's info"}
                        >
                            <form onSubmit={() => {}}>
                                <div className="modal-action">
                                    <input
                                        value={editTaskValue}
                                        onChange={(e) =>
                                            setEditTaskValue(e.target.value)
                                        }
                                        type="text"
                                        placeholder="Enter new task's title"
                                        className="input input-bordered w-full"
                                    />
                                    <Slider
                                        title="Select tasks' priority"
                                        defaultValue={priority}
                                        minValue={1}
                                        maxValue={10}
                                        step={1}
                                        onSlide={updateSlider}
                                    />
                                    <Button
                                        type="submit"
                                        styles="btn hover:translate-y-0 absolute bottom-3 right-2 w-1/3 h-1/4"
                                        title={"CREATE TASK"}
                                        disabled={false}
                                    >
                                        Update
                                    </Button>
                                </div>
                            </form>
                        </Modal>
                    </div>
                    <div
                        className={`w-1/4 flex justify-end ${
                            isDone && "cursor-not-allowed"
                        } `}
                    >
                        <Button
                            handleClick={() => {}}
                            styles={`h-full w-full  text-white`}
                            type={"button"}
                            title={"DELETE TASK"}
                            disabled={isDone}
                        >
                            DELETE TASK{" "}
                        </Button>
                    </div>
                    <Button
                        handleClick={() => {}}
                        styles={`h-full w-1/4 text-white `}
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
