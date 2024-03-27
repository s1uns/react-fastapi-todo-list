import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export const AddTask: React.FC = () => {
    return (
        <button className="bg-red-500 h-10rem w-12rem flex flex-row">
            Add new Task <AiOutlinePlus className="ml-2" size={18} />
        </button>
    );
};
