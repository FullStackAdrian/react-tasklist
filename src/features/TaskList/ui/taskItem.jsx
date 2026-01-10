function TaskItem({ task, index, onToggleComplete, onRemoveTask}) {
    return (
        <li key={index} className="p-6 bg-slate-800 border border-slate-700 rounded-lg">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <strong className="text-slate-200 text-lg">{task.taskName}</strong>
                        <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                            {task.taskCategory}
                        </span>
                        {task.taskPriority && (
                            <span className={`px-2 py-1 text-xs rounded ${
                                task.taskPriority === 'alta' ? 'bg-red-600 text-white' :
                                task.taskPriority === 'mitja' ? 'bg-yellow-600 text-white' :
                                'bg-green-600 text-white'
                            }`}>
                                {task.taskPriority}
                            </span>
                        )}
                    </div>
                    
                    {task.taskDescription && (
                        <p className="text-slate-400 text-sm mb-3">{task.taskDescription}</p>
                    )}
                    
                    <div className="flex items-center gap-4 text-sm">
                        <span className="text-slate-500">
                            {new Date(task.taskDueDate).toLocaleDateString('ca-ES')}
                        </span>
                        {task.urgent && (
                            <span className="text-orange-400">Urgent</span>
                        )}
                        {task.taskImportant && (
                            <span className="text-blue-400">Important</span>
                        )}
                    </div>
                </div>
                
                <button 
                    onClick={() => onToggleComplete(index)}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
                >
                    
                    Completar
                </button>

                <button 
                    onClick={() => onRemoveTask(index)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
                >
                    
                    Eliminar
                </button>
            </div>
        </li>
    );
}

export default TaskItem;