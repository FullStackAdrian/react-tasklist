import React from "react";

function TaskList({ tasks }) {
    return (
        <ul id="llistaTasques">
            {tasks.map((task, index) => (
                <li key={index}>
                    <strong>{task.nom}</strong> — {task.category} — {task.date}
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
