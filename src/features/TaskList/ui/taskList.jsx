import TaskItem from "./taskItem.jsx";

function TaskList({ tasks, onToggleComplete, onRemoveTask }) {
    return (
        <div className="max-w-4xl mx-auto mt-6">
            <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <ul className="divide-y divide-slate-700">
                    {tasks.map((task, index) => (
                        <TaskItem key={index} task={task} index={index} onToggleComplete={onToggleComplete}  onRemoveTask={onRemoveTask}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TaskList;