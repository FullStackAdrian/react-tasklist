import { useState } from "react";

function useTaskList() {
    const [tasks, setTasks] = useState([]);

    // sort recived tasks( data ) by Eisenhower Box
    // “What is important is seldom urgent and what is urgent is seldom important.”
    const sortTasks = (list) => [...list].sort((a, b) => b.important * 2 + b.urgent - (a.important * 2 + a.urgent));

    const onAddTask = (data) => {
        setTasks((prev) => sortTasks([...prev, data]));
    };

    const onFilterTasks = (list, text) => {
        if (!text) return list;
        return list.filter((task) => task.nom.toLowerCase().includes(text.toLowerCase()));
    };

    return { onAddTask, onFilterTasks, tasks };
}

export default useTaskList;
