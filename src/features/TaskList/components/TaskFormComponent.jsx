import React from "react";
import TaskForm from "../ui/TaskForm.jsx";
import  useTaskForm  from "../hooks/useTaskForm.jsx";
import  useTaskList  from "../hooks/useTaskList.jsx"

function TaskFormComponent({ onAddTask }) {
    const { register, handleSubmit, reset, errors } = useTaskForm();

    const onSubmit = (data) => {
        console.log("Datos del formulario:", data);

        if (onAddTask) {
            onAddTask(data);
        }

        reset();
    };

    return <TaskForm register={register} errors={errors} onSubmit={handleSubmit(onSubmit)} />;
}

export default TaskFormComponent;
