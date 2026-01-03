import TaskItem from "./taskItem.jsx";

function TaskList({ tasks }) {
    return (
        <div className="max-w-4xl mx-auto mt-6">
            <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-700">
                    <h2 className="text-xl font-semibold text-slate-100">Task List</h2>
                </div>
                <ul className="divide-y divide-slate-700">
                    {tasks.map((task, index) => (
                        <TaskItem key={index} task={task} index={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TaskList;