function TaskForm({ register, errors, onSubmit }) {
    return (
        <form id="form-tasca" onSubmit={onSubmit}>
            <label htmlFor="task-name">Nom de la tasca</label>
            <input id="task-name" type="text" {...register("nom")} />
            {errors.nom && <p>{errors.nom.message}</p>}

            <label htmlFor="task-category">Categoria</label>
            <select id="task-category" {...register("category")}>
                <option value="">-- Tria categoria --</option>
                <option value="casa">Casa</option>
                <option value="feina">Feina</option>
                <option value="estudis">Estudis</option>
            </select>
            {errors.category && <p>{errors.category.message}</p>}

            <label htmlFor="is-urgent">Es urgent: </label>
            <input type="checkbox" name="is-urgent" id="is-urgent" {...register("urgent")} />
            
            <label htmlFor="is-important">Es important: </label>
            <input type="checkbox" name="is-important" id="is-important" {...register("important")} />
            
            <label htmlFor="task-deadline">Data</label>
            <input id="task-deadline" type="date" {...register("date")} />
            {errors.date && <p>{errors.date.message}</p>}

            <button type="submit">Afegir tasca</button>
        </form>
    );
}

export default TaskForm;
