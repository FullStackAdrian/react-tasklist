import TaskList from "../ui/taskList.jsx";

function TaskListComponent({ tasks, onToggleComplete, onRemoveTask }) {

    return <TaskList tasks={tasks} onToggleComplete={onToggleComplete} onRemoveTask={onRemoveTask} />;
}

export default TaskListComponent;
