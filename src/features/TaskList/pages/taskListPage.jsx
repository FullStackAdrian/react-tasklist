import TaskFormComponent from "../components/taskFormComponent.jsx";
import TaskListComponent from "../components/taskListComponent.jsx";
import FilterBarFormComponent from "../components/filterBarFormComponent.jsx";
import useTaskList from "../hooks/useTaskList.jsx";

function TaskListPage() {
    const { tasks, onAddTask, applyFilter : onFilter  } = useTaskList();

    return (
        <div className="min-h-screen bg-slate-900 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Columna 1: Formulario */}
                    <div>
                        <TaskFormComponent onAddTask={onAddTask} />
                    </div>
                    
                    {/* Columna 2: Filtro + Lista (contenedor unificado) */}
                    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
                        <h2 className="text-xl font-semibold text-slate-100 mb-6">Task List</h2>
                        <FilterBarFormComponent onFilter={onFilter} />
                        <TaskListComponent tasks={tasks} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default TaskListPage;