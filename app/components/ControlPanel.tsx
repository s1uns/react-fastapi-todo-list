"use client";

import React, { FormEventHandler, useState } from "react";
import { Button } from "@/components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { Search } from "@/components/Search";
import { Modal } from "@/components/Modal";
import { Slider } from "@/components/Slider";

export const ControlPanel: React.FC = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>("");
    const [newPriorityValue, setNewPriorityValue] = useState<number>(10);
    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = () => {};

    // const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (
    //     e
    // ) => {
    //     e.preventDefault();
    //     await addTodo({
    //         id: uuidv4(),
    //         text: newTaskValue,
    //     });
    //     setNewTaskValue("");
    //     setModalOpen(false);
    //     router.refresh();
    // };

    const updateSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPriorityValue((priority) => 11 - +e.target.value);
    };
    return (
        <div className="flex flex-row gap-16 px-20 w-full h-80  justify-center bg-gray-300 py-8 rounded">
            <div className="w-1/4">
                <Button
                    handleClick={() => {
                        setNewTaskValue("");
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
                    <form onSubmit={() => {}}>
                        <div className="modal-action">
                            <input
                                value={newTaskValue}
                                onChange={(e) =>
                                    setNewTaskValue(e.target.value)
                                }
                                type="text"
                                placeholder="Enter task title"
                                className="input input-bordered w-full"
                            />

                            <Slider
                                title="Select tasks' priority"
                                defaultValue={newPriorityValue}
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
                                Create
                            </Button>
                        </div>
                    </form>
                </Modal>
            </div>
            <div className="flex flex-row w-1/3 gap-6 items-end justify-center h-full px-3">
                <div className="flex flex-col w-full h-full justify-start">
                    <h3 className="text-center flex flex-col justify-end text-6xl h-full text-cyan-500	">
                        Sort by priority:
                    </h3>
                    <div className="flex flex-row justify-between items-end h-full w-full gap-5">
                        <Button
                            handleClick={() => {}}
                            styles={"h-2/3 w-1/2"}
                            type={"button"}
                            title={"ASC SORT"}
                            disabled={false}
                        >
                            ASC
                        </Button>
                        <Button
                            handleClick={() => {}}
                            styles={"h-2/3 w-1/2"}
                            type={"button"}
                            title={"DESC SORT"}
                            disabled={false}
                        >
                            DESC
                        </Button>
                    </div>
                </div>
                {/* <Button
                    handleClick={() => {}}
                    styles={"h-full w-1/2"}
                    type={"button"}
                    title={"CLEAR FILTERS"}
                    disabled={false}
                >
                    <TbFilterX size={50} />
                </Button> */}
            </div>
            <Search />
        </div>
    );
};
