import { useState } from "react";

export const useTaskList = (initialTasks = []) => {
    const [tasks, setTasks] = useState(initialTasks);

    // Crear una nueva tarea
    const addTask = (text) => {
        if (!text.trim()) return;

        const newTask = {
            id: Date.now().toString(), // ID único basado en timestamp
            text: text.trim(),
            completed: false,
        };

        setTasks((prev) => [...prev, newTask]);
    };

    // Eliminar una tarea por ID
    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    // Eliminar todas las tareas
    const clearAllTasks = () => {
        setTasks([]);
    };

    return {
        // Estado
        tasks,

        // Acciones
        addTask,
        deleteTask,
        clearAllTasks,
    };
};
