import FilterTaskBar from "../ui/filterTaskBar.jsx";
import useFilterTask from "../hooks/useFilterTask.jsx";

function FilterTaskBarComponent({ onFilterTask }) {
    const { register, handleSubmit, reset, errors } = useFilterTask();
    
    const onSubmit = (tasks) => {
        if (onFilterTask) {
            onFilterTask(tasks);
        }
        
        reset();
    };
  
    return <FilterTaskBar register={register} errors={errors} onSubmit={handleSubmit(onSubmit)} />;
}

export default FilterTaskBarComponent;
