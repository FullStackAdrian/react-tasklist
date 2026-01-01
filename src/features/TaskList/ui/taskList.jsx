import TaskItem from "./taskItem.jsx";

function TaskList({ tasks }) {
    return (
        <ul id="llistaTasques">
            {tasks.map((task, index) => (
                <TaskItem key={index} task={task} index={index} />
            ))}
        </ul>
    );
}

export default TaskList;
