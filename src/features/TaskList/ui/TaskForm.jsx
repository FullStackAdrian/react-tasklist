import React from "react";

function TaskForm() {
  return (
    <div>
      <form id="form-tasca">
        <label htmlFor="nom-tasca">Nom de la tasca</label>
        <input id="nom-tasca" name="nom" type="text" />

        <label htmlFor="categoria-tasca">Categoria</label>
        <select id="categoria-tasca" name="categoria">
          <option value="">-- Tria categoria --</option>
          <option value="casa">Casa</option>
          <option value="feina">Feina</option>
          <option value="estudis">Estudis</option>
        </select>

        <label htmlFor="data-tasca">Data</label>
        <input id="data-tasca" name="data" type="date" />

        <button type="submit">Afegir tasca</button>
      </form>      
    </div>
  );
}

export default TaskForm;

