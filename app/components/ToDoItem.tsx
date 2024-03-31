import { ToDoObject } from "@/types/todo";
import React, { useState } from "react";
import { Button } from "@/components/Button";
import PriorityBar from "@/components/PriorityBar";
import { Modal } from "@/components/Modal";
import { Slider } from "@/components/Slider";
import { deleteTodo, switchCompletness, updateTodo } from "@/services/api";
import { useGlobalContext } from "@/context/GlobalContext";
import { toast } from "react-toastify";

export const ToDoItem: React.FC<ToDoObject> = ({
    id,
    name,
    priority,
    isDone,
}) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [editTaskNameValue, setEditTaskNameValue] = useState<string>(name);
    const [editPriorityValue, setEditPriorityValue] =
        useState<number>(priority);
    const { currentCompletness, searchString, order, setTodos, updateTodos } =
        useGlobalContext();

    const updateSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditPriorityValue((oldPriority) => 11 - +e.target.value);
    };

    const handleSubmitUpdateTodo = async () => {
        const response = updateTodo(id, {
            name: editTaskNameValue,
            priority: editPriorityValue,
        });

        response
            .then((data) => {
                setEditTaskNameValue("");
                setEditPriorityValue(priority);
                setModalOpen(false);
                updateTodos(currentCompletness, searchString, order, setTodos);
                toast.success(data);
            })
            .catch((error: any) => {
                if (error.response) {
                    toast.error(error.response.data);
                }
            });
    };

    const handleDeleteTodo = async () => {
        const response = deleteTodo(id);
        response
            .then((data) => {
                updateTodos(currentCompletness, searchString, order, setTodos);
                toast.success(data);
            })
            .catch((error: any) => {
                if (error.response) {
                    toast.error(error.response.data);
                }
            });
    };

    const handleSwitchCompleteness = async () => {
        await switchCompletness(id);
        updateTodos(currentCompletness, searchString, order, setTodos);
    };
    return (
        <tr className={`text-white${isDone ? `bg-slate-200 ` : ""}`}>
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
                    <div className={"w-1/4 flex justify-end "}>
                        <Button
                            handleClick={() => {
                                setEditTaskNameValue(name);
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
                            <div className="modal-action w-full flex flex-row gap-5">
                                <input
                                    value={editTaskNameValue}
                                    onChange={(e) =>
                                        setEditTaskNameValue(e.target.value)
                                    }
                                    type="text"
                                    placeholder="Enter new task's title"
                                    className="input input-bordered w-full h-[50px] text-4xl"
                                />
                                <Slider
                                    title="Select tasks' priority"
                                    minValue={1}
                                    maxValue={10}
                                    currentValue={editPriorityValue}
                                    step={1}
                                    onSlide={updateSlider}
                                />
                                <Button
                                    type="button"
                                    styles="btn hover:translate-y-0 absolute bottom-3 right-2 w-1/3 h-1/4"
                                    title={"CREATE TASK"}
                                    disabled={false}
                                    handleClick={() => {
                                        handleSubmitUpdateTodo();
                                    }}
                                >
                                    Update
                                </Button>
                            </div>
                        </Modal>
                    </div>
                    <div className={"w-1/4 flex justify-end "}>
                        <Button
                            handleClick={async () => handleDeleteTodo()}
                            styles={`h-full w-full  text-white`}
                            type={"button"}
                            title={"DELETE TASK"}
                            disabled={isDone}
                        >
                            DELETE TASK{" "}
                        </Button>
                    </div>
                    <Button
                        handleClick={() => handleSwitchCompleteness()}
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
