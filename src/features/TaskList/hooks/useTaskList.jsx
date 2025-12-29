import React from "react";
import { useState } from "react";

function useTaskList() {
    const [tasks, setTasks] = useState([]);
    const parseData = (data) => {};
    const onAddTask = (data) => {
        setTasks((prev) => [...prev, data]);
    };

    return { onAddTask, tasks };
}

export default useTaskList;
