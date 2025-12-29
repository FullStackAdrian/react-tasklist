import React from "react";
import TaskList from "../ui/TaskList.jsx";
import useTaskList from "../hooks/useTaskList.jsx";

function TaskListComponent() {
    const { tasks } = useTaskList();

    return <TaskList tasks={tasks} />;
}

export default TaskListComponent;
