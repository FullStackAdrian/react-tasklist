import React from "react";
import { useState } from "react";

function useTaskList(data) {
    const [tasks, setTasks] = useState([]);
    const parseData = (data) => {

    };
    const onAddTask = (data) => {
        const array = tasks;
        array.push(data);
        setTasks(array);
    };

    return { onAddTask, tasks };
};

export default useTaskList;