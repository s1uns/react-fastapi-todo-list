import { darkenHexColor } from "@/utils/darkenHexColor";
import { getColor } from "@/utils/getColor";
import React from "react";

interface PriorityBarProps {
    priority: number;
    isDone: boolean;
}

export const PriorityBar: React.FC<PriorityBarProps> = ({
    priority,
    isDone,
}) => {
    const barWidth = (11 - priority) * 10 + "%";
    const bgColor = getColor(priority, isDone);
    const color = darkenHexColor(bgColor, 20);

    return (
        <div
            className={`priority-bar flex items-center justify-center rounded-xl text-center`}
            style={{ backgroundColor: bgColor, width: barWidth, color: color }}
        >
            <p className="">{priority}</p>
        </div>
    );
};

export default PriorityBar;
