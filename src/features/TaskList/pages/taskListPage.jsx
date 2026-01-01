import TaskFormComponent from "../components/taskFormComponent.jsx";
import TaskListComponent from "../components/taskListComponent.jsx";
import useTaskList from "../hooks/useTaskList.jsx";

function TaskListPage() {
    const { onAddTask, tasks } = useTaskList();

    return (
        <>
            <TaskFormComponent onAddTask={ onAddTask } />
            <TaskListComponent tasks={ tasks } />
        </>
    );
}
export default TaskListPage;
