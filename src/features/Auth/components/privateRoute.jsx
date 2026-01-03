import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// Componente para proteger rutas (React Router v6)
// Uso: <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
export default function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}