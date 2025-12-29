import { useForm } from 'react-hook-form';

function useTaskForm() {
  const {
    register,           
    handleSubmit,       
    reset,              
    formState: { errors } 
  } = useForm();

  return {
    register,
    handleSubmit,
    reset,
    errors
  };
};

export default useTaskForm;