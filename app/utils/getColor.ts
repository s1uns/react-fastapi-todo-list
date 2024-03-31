export const getColor = (priority: number, isDone: boolean): string => {
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
