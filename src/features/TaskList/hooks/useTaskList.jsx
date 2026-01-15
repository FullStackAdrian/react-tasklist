import { useState } from "react";
import useFilteredList from "../hooks/useFilteredList";

function useTaskList() {
    const [tasks, setTasks] = useState([
        {
            taskName: "Entrega informe trimestral",
            taskCategory: "Feina",
            taskDueDate: "2027-02-10T00:00:00.000Z",
            taskPriority: "alta",
            taskImportant: true,
            taskDescription: "Compilar resultados y enviar informe al equipo directivo.",
            urgent: true,
        },
        {
            taskName: "Refactor componente TaskList",
            taskCategory: "Estudis",
            taskDueDate: "2027-06-12T00:00:00.000Z",
            taskPriority: "alta",
            taskImportant: true,
            taskDescription: "Mejorar rendimiento y añadir tests unitarios.",
            urgent: true,
        },
        {
            taskName: "Declaración de impuestos",
            taskCategory: "Personal",
            taskDueDate: "2027-07-01T00:00:00.000Z",
            taskPriority: "alta",
            taskImportant: true,
            taskDescription: "Reunir documentación y presentar declaración anual.",
            urgent: true,
        },
        {
            taskName: "Cita médico anual",
            taskCategory: "Personal",
            taskDueDate: "2027-03-05T00:00:00.000Z",
            taskPriority: "mitja",
            taskImportant: true,
            taskDescription: "Chequeo general y análisis de rutina.",
            urgent: false,
        },
        {
            taskName: "Comprar regalos cumpleaños",
            taskCategory: "Personal",
            taskDueDate: "2027-04-20T00:00:00.000Z",
            taskPriority: "baixa",
            taskImportant: false,
            taskDescription: "Buscar ideas y comprar 2 regalos.",
            urgent: false,
        },
        {
            taskName: "Planificar viaje de verano",
            taskCategory: "Personal",
            taskDueDate: "2027-05-30T00:00:00.000Z",
            taskPriority: "mitja",
            taskImportant: false,
            taskDescription: "Reservar vuelos y alojamiento, preparar itinerario.",
            urgent: false,
        },
    ]);
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
