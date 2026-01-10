import TaskFormComponent from "../components/taskFormComponent.jsx";
import TaskListComponent from "../components/taskListComponent.jsx";
import FilterBarFormComponent from "../components/filterBarFormComponent.jsx";
import useTaskList from "../hooks/useTaskList.jsx";

function TaskListPage() {
    const { tasks, onAddTask, removeTask: onRemoveTask, toggleComplete: onToggleComplete, applyFilter: onFilter } = useTaskList();

    return (
        <div className=" overflow-hidden p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-auto">
                <div>
                    <TaskFormComponent onAddTask={onAddTask} />
                </div>
                <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
                    <h2 className="text-xl font-semibold text-slate-100 mb-6">Task List</h2>
                    <FilterBarFormComponent onFilter={onFilter} />
                    <TaskListComponent tasks={tasks} onToggleComplete={onToggleComplete} onRemoveTask={onRemoveTask} />
                </div>
            </div>
        </div>
    );
}
export default TaskListPage;
