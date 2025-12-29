import "./App.css";
import TaskFormComponent from "./features/TaskList/components/TaskFormComponent.jsx";
import TaskListComponent from "./features/TaskList/components/TaskListComponent.jsx";

function App() {
    const { tasks } = useTaskList();
    return (
        <>
            <TaskFormComponent />
            <TaskListComponent />
        </>
    );
}

export default App;
