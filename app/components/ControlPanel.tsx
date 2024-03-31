"use client";

import React, { FormEventHandler, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { Search } from "@/components/Search";
import { Modal } from "@/components/Modal";
import { Slider } from "@/components/Slider";
import { TbFilterX } from "react-icons/tb";
import { useGlobalContext } from "@/context/GlobalContext";
import { createTodo, fetchTodos } from "@/services/api";
import { toast } from "react-toastify";

export const ControlPanel: React.FC = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskNameValue, setNewTaskNameValue] = useState<string>("");
    const [newPriorityValue, setNewPriorityValue] = useState<number>(10);
    const {
        setTodos,
        updateTodos,
        currentCompletness,
        setCurrentCompletness,
        searchString,
        setSearchString,
        order,
        setOrder,
    } = useGlobalContext();

    const handleSubmitNewTodo = async () => {
        const response = createTodo({
            name: newTaskNameValue,
            priority: newPriorityValue,
            isDone: false,
        });

        response
            .then((data) => {
                setNewTaskNameValue("");
                setNewPriorityValue(10);
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

    const updateSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPriorityValue((priority) => 11 - +e.target.value);
    };
    return (
        <div className="flex flex-row gap-16 px-20 w-full h-80  justify-center bg-gray-300 py-8 rounded">
            <div className="w-1/4">
                <Button
                    handleClick={() => {
                        setNewTaskNameValue("");
                        setNewPriorityValue(10);
                        setModalOpen(true);
                    }}
                    styles={"h-1/2 w-full  "}
                    type={"button"}
                    title={"ADD TASK"}
                    disabled={false}
                >
                    ADD TASK
                    <AiOutlinePlus className="ml-2" size={24} />
                </Button>
                <Modal
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    title={"Add new task"}
                >
                    <div className="modal-action w-full flex flex-row gap-5">
                        <input
                            value={newTaskNameValue}
                            onChange={(e) =>
                                setNewTaskNameValue(e.target.value)
                            }
                            type="text"
                            placeholder="Enter task title"
                            className="input input-bordered w-full h-[50px] text-4xl"
                        />

                        <Slider
                            title="Select tasks' priority"
                            minValue={1}
                            maxValue={10}
                            step={1}
                            onSlide={updateSlider}
                            currentValue={newPriorityValue}
                        />
                        <Button
                            handleClick={() => handleSubmitNewTodo()}
                            type="button"
                            styles="btn hover:translate-y-0 absolute bottom-3 right-2 w-1/3 h-1/4"
                            title={"CREATE TASK"}
                            disabled={false}
                        >
                            Create
                        </Button>
                    </div>
                </Modal>
            </div>
            <div className="flex flex-row w-1/3 gap-6 items-end justify-center h-full px-3 ">
                <div className="flex flex-col w-full h-full justify- px-3">
                    <h3 className="text-center flex flex-col justify-end text-6xl h-full text-cyan-500	">
                        Sort by priority: {order}
                    </h3>
                    <div className="flex flex-row justify-between items-end h-full w-full gap-5">
                        <Button
                            handleClick={() => {
                                setOrder("asc");
                            }}
                            styles={"h-2/3 w-1/2"}
                            type={"button"}
                            title={"ASC SORT"}
                            disabled={false}
                        >
                            ASC
                        </Button>
                        <Button
                            handleClick={() => {
                                setOrder("desc");
                            }}
                            styles={"h-2/3 w-1/2"}
                            type={"button"}
                            title={"DESC SORT"}
                            disabled={false}
                        >
                            DESC
                        </Button>
                    </div>
                </div>
                <Button
                    handleClick={() => {
                        setCurrentCompletness("all");
                        setSearchString("");
                        setOrder("none");
                    }}
                    styles={"h-1/2 w-1/3"}
                    type={"button"}
                    title={"CLEAR FILTERS"}
                    disabled={false}
                >
                    <TbFilterX size={50} />
                </Button>
            </div>
            <Search />
        </div>
    );
};
