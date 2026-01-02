function FilterTaskBar({ register, errors, onSubmit }) {
    return (
        <form id="filter-form" onSubmit={onSubmit}>
            <input type="text" id="filter-input" placeholder="filtra per nom" {...register("filter")} />
            {errors.nom && <p>{errors.nom.message}</p>}

            <button type="submit">Filter</button>
        </form>
    );
}
export default FilterTaskBar;
