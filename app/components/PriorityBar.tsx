import React from "react";

interface PriorityBarProps {
    priority: number;
    isDone: boolean;
}

const getColor = (priority: number, isDone: boolean): string => {
    if (isDone) {
        return "#808080";
    } else if (priority >= 8) {
        return "#4caf50";
    } else if (priority >= 6) {
        return "#ffd400";
    } else if (priority >= 4) {
        return "#ffa500";
    } else {
        return "#ff0000";
    }
};

export const PriorityBar: React.FC<PriorityBarProps> = ({
    priority,
    isDone,
}) => {
    const barWidth = (11 - priority) * 10;
    const color = getColor(priority, isDone);

    return (
        <div
            className={`priority-bar flex items-center justify-center rounded-xl text-center`}
            style={{ backgroundColor: color, width: `${barWidth}%` }}
        >
            <p className="text-white">{priority}</p>
        </div>
    );
};

export default PriorityBar;
