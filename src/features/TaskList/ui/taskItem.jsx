function TaskItem({ task, index}) {
    return (
        <li key={index} className="p-6 bg-slate-800 border border-slate-700 rounded-lg">
            <strong className="text-slate-200">{task.nom}</strong>
            <span className="text-slate-400"> — {task.category}</span>
            {task.urgent && <span className="text-slate-400"> — Urgent</span>}
            {task.important && <span className="text-slate-400"> — Important</span>}
            <span className="text-slate-400"> — {task.date}</span>
        </li>
    );
}

export default TaskItem;