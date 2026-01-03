
import FilterTaskBar from "../ui/filterTaskBar.jsx";
import useFilterForm from "../hooks/useFilterForm.jsx";

function FilterBarFormComponent({ onFilter }) {
    const { register, handleSubmit, reset, errors } = useFilterForm();

    const onSubmit = (filter) => {
        console.log("Datos del formulario:", filter.filter);
        if (onFilter) {
            onFilter(filter.filter); 
        }

        reset();
    };

    return <FilterTaskBar register={register} errors={errors} onSubmit={handleSubmit(onSubmit)} />;
}

export default FilterBarFormComponent;