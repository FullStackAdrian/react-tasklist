import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { filterTaskBarSchema } from '../schema/filterTaskBarSchema.jsx';

function useFilterTask() {
const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(filterTaskBarSchema),
        mode: "onSubmit",
    });

    return { register, handleSubmit, reset, errors };
}

export default useFilterTask;
