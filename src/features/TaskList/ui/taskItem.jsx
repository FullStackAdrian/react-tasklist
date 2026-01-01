function TaskItem({ task, index}) {
    return (
        <li key={index}>
            <strong>{task.nom}</strong> — {task.category} {task.urgent && <span> — Urgent</span>}
            {task.important && <span> — Important</span>} — {task.date}
        </li>
    );
}

export default TaskItem;
