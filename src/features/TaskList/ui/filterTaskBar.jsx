function FilterTaskBar() {
    return (
        <form id="filter-form" onSubmit={onSubmit}>
            <input type="text" id="filter-input" placeholder="filtra per nom" {...register("filter")} />
            <button type="submit">Filter</button>
        </form>
    );
}
export default FilterTaskBar;