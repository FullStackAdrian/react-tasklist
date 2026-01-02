import TaskFormComponent from "../components/taskFormComponent.jsx";
import TaskListComponent from "../components/taskListComponent.jsx";
import FilterTaskBarComponent from "../components/filterTaskBarComponent.jsx";
import useTaskList from "../hooks/useTaskList.jsx";

function TaskListPage() {
    const { onAddTask, onFilterTasks, tasks } = useTaskList();

    return (
        <>  
            <FilterTaskBarComponent onSubmit={onFilterTasks}/>
            <TaskFormComponent onAddTask={ onAddTask } />
            <TaskListComponent tasks={ tasks } />
        </>
    );
}
export default TaskListPage;
