import { useState, useMemo } from "react";

const useFilteredList = (tasks, filter) => {
    const filteredTasks = useMemo(() => {
        if (!filter) return tasks;

        return tasks.filter((item) => item.taskName.toLowerCase().includes(filter.toLowerCase()));
    }, [tasks, filter]);

    return filteredTasks;
};

export default useFilteredList;
