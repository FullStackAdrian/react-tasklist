import { useState } from "react";
import useFilteredList from "../hooks/useFilteredList";

function useTaskList() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("");

    // sort received tasks (data) by Eisenhower Box
    // “What is important is seldom urgent and what is urgent is seldom important.”
    const sortTasks = (list) => [...list].sort((a, b) => b.important * 2 + b.urgent - (a.important * 2 + a.urgent));

    const onAddTask = (data) => {
        setTasks((prev) => sortTasks([...prev, data]));
    };

    const applyFilter = (filter) => {
        setFilter(filter);
    };

    const filteredList = useFilteredList(tasks, filter);

    return { tasks: filteredList, onAddTask, applyFilter };
}

export default useTaskList;
