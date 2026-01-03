import "./App.css";
import MainLayout from "./layouts/mainLayout.jsx";
import TaskListPage from "./features/TaskList/pages/taskListPage.jsx";

function App() {
    return (
        <>
            <MainLayout>
                <TaskListPage />
            </MainLayout>
        </>
    );
}

export default App;
