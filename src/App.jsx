import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider  from "./features/Auth/context/authContext.jsx";
import PrivateRoute from "./features/Auth/components/privateRoute.jsx";
import MainLayout from "./layouts/mainLayout.jsx";
import TaskListPage from "./features/TaskList/pages/taskListPage.jsx";
import LoginPage from "./features/Auth/pages/loginPage.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainLayout>
                  <TaskListPage />
                </MainLayout>
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;