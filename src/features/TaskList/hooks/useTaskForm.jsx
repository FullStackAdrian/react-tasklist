import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema } from '../schema/taskFormSchema.jsx';

function useTaskForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(taskSchema),
        mode: "onSubmit",
    });

    return { register, handleSubmit, reset, errors };
}

export default useTaskForm;
