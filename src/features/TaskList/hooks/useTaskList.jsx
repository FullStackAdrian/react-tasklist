import { useState } from "react";

function useTaskList() {
    const [tasks, setTasks] = useState([]);
    const onAddTask = (data) => {
        setTasks((prev) => [...prev, data]);
    };

    return { onAddTask, tasks };
}

export default useTaskList;
