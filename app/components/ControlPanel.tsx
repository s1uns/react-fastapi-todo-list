"use client";

import React from "react";
import { Button } from "@/components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { Search } from "@/components/Search";
import { TbFilterX } from "react-icons/tb";

export const ControlPanel: React.FC = () => {
    return (
        <div className="flex flex-row gap-16 px-20 w-full h-40 text-cyan-200 justify-center">
            <Button
                handleClick={() => {}}
                styles={"h-full w-1/4  "}
                type={"button"}
                title={"ADD TASK"}
                disabled={false}
            >
                ADD TASK
                <AiOutlinePlus className="ml-2" size={24} />
            </Button>
            <div className="flex flex-row w-1/3 gap-6 items-end justify-center h-full px-3">
                <div className="flex flex-col w-full h-full justify-start">
                    <h3 className="text-center text-6xl h-full">
                        Sort by priority:
                    </h3>
                    <div className="flex flex-row justify-between items-end h-full w-full gap-5">
                        <Button
                            handleClick={() => {}}
                            styles={"h-full w-1/2"}
                            type={"button"}
                            title={"ASC SORT"}
                            disabled={false}
                        >
                            ASC
                        </Button>
                        <Button
                            handleClick={() => {}}
                            styles={"h-full w-1/2"}
                            type={"button"}
                            title={"DESC SORT"}
                            disabled={false}
                        >
                            DESC
                        </Button>
                    </div>
                </div>
                <Button
                    handleClick={() => {}}
                    styles={"h-full w-1/2"}
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
