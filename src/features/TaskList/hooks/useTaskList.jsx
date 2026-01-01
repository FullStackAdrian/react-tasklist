import { useState } from "react";

function useTaskList() {
    const [tasks, setTasks] = useState([]);

    // sort recived tasks( data ) by Eisenhower Box
    // “What is important is seldom urgent and what is urgent is seldom important.”
    const sortTasks = (list) => [...list].sort((a, b) => b.important * 2 + b.urgent - (a.important * 2 + a.urgent));

    const onAddTask = (data) => {
        setTasks((prev) => sortTasks([...prev, data]));
    };

    return { onAddTask, tasks };
}

export default useTaskList;
