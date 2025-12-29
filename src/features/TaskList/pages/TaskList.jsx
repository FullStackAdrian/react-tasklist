import React from "react";
import TaskFormComponent from "../components/TaskFormComponent.jsx";
import TaskListComponent from "../components/TaskListComponent.jsx";
import useTaskList from "../hooks/useTaskList.jsx";

function TaskListPage() {
    const { onAddTask, tasks } = useTaskList();

    return (
        <>
            <TaskFormComponent onAddTask={ onAddTask } />
            <TaskListComponent tasks={ tasks } />
        </>
    );
}
export default TaskListPage;
