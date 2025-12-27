// hooks/useTaskForm.js
import { useForm } from 'react-hook-form';

export const useTaskForm = () => {
  const {
    register,           // Para conectar los inputs
    handleSubmit,       // Para manejar el envío
    reset,              // Para limpiar el formulario
    formState: { errors } // Para errores
  } = useForm();

  return {
    register,
    handleSubmit,
    reset,
    errors
  };
};