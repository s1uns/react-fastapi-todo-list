import React from "react";

interface PriorityBarProps {
    priority: number;
}

export const PriorityBar: React.FC<PriorityBarProps> = ({ priority }) => {
    const barWidth = (11 - priority) * 10 + "%";

    return (
        <div className="w-full">
            <div
                className="bg-[#4caf50] flex items-center justify-end pl-10 rounded-xl text-center"
                style={{ width: barWidth }}
            >
                <span className="text-[white] pr-[5px]">{priority}</span>
            </div>
        </div>
    );
};

export default PriorityBar;
