import { useState } from "react";
import useFilteredList from "../hooks/useFilteredList";

function useTaskList() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("");

    // sort received tasks (data) by Eisenhower Box
    // “What is important is seldom urgent and what is urgent is seldom important.”
    const sortTasks = (list) =>
        [...list].sort((a, b) => b.taskImportant * 2 + b.urgent - (a.taskImportant * 2 + a.urgent));

    const onAddTask = (data) => {
        setTasks((prev) => sortTasks([...prev, data]));
    };

    const removeTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    const toggleComplete = (index) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task))
        );
    };

    const applyFilter = (filter) => {
        setFilter(filter);
    };

    const resetFilter = () => setFilter("");

    const filteredList = useFilteredList(tasks, filter);

    return { tasks: filteredList, onAddTask, removeTask, toggleComplete, applyFilter, resetFilter };
}

export default useTaskList;
