import TaskFormComponent from "../components/taskFormComponent.jsx";
import TaskListComponent from "../components/taskListComponent.jsx";
import FilterBarFormComponent from "../components/filterBarFormComponent.jsx";
import useTaskList from "../hooks/useTaskList.jsx";

function TaskListPage() {
    const { tasks, onAddTask, applyFilter : onFilter  } = useTaskList();

    return (
        <>
            <FilterBarFormComponent onFilter={onFilter} />
            <TaskFormComponent onAddTask={onAddTask} />
            <TaskListComponent tasks={tasks} />
        </>
    );
}
export default TaskListPage;
