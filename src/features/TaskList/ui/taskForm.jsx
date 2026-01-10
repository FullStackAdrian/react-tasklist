function TaskForm({ register, errors, onSubmit }) {
    return (
        <form id="task-form" onSubmit={onSubmit} className="max-w-4xl mx-auto mb-8 bg-slate-800 rounded-lg border border-slate-700 p-6">
            <h2 className="text-xl font-semibold text-slate-100 mb-6">Crear Nova Tasca</h2>
            
            <div className="space-y-4">
                <div>
                    <label htmlFor="task-name" className="block text-slate-300 text-sm font-medium mb-2">Nom de la tasca</label>
                    <input id="task-name" type="text" {...register("taskName")} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500" />
                    {errors.taskName && <p className="text-red-400 text-sm mt-1">{errors.taskName.message}</p>}
                </div>

                <div>
                    <label htmlFor="task-category" className="block text-slate-300 text-sm font-medium mb-2">Categoria</label>
                    <select id="task-category" {...register("taskCategory")} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500">
                        <option value="">-- Tria categoria --</option>
                        <option value="Personal">Personal</option>
                        <option value="Casa">Casa</option>
                        <option value="Feina">Feina</option>
                        <option value="Estudis">Estudis</option>
                    </select>
                    {errors.taskCategory && <p className="text-red-400 text-sm mt-1">{errors.taskCategory.message}</p>}
                </div>

                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Prioritat</label>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-slate-300">
                            <input type="radio" value="baixa" {...register("taskPriority")} className="w-4 h-4 border-slate-600 bg-slate-900 text-blue-500 focus:ring-slate-500" />
                            <span>Baixa</span>
                        </label>
                        <label className="flex items-center gap-2 text-slate-300">
                            <input type="radio" value="mitja" {...register("taskPriority")} className="w-4 h-4 border-slate-600 bg-slate-900 text-blue-500 focus:ring-slate-500" />
                            <span>Mitjana</span>
                        </label>
                        <label className="flex items-center gap-2 text-slate-300">
                            <input type="radio" value="alta" {...register("taskPriority")} className="w-4 h-4 border-slate-600 bg-slate-900 text-blue-500 focus:ring-slate-500" />
                            <span>Alta</span>
                        </label>
                    </div>
                    {errors.taskPriority && <p className="text-red-400 text-sm mt-1">{errors.taskPriority.message}</p>}
                </div>

                <div className="flex gap-6">
                    <label htmlFor="is-urgent" className="flex items-center gap-2 text-slate-300">
                        <input type="checkbox" name="is-urgent" id="is-urgent" {...register("urgent")} className="w-4 h-4 rounded border-slate-600 bg-slate-900 text-blue-500 focus:ring-slate-500" />
                        <span>Es urgent</span>
                    </label>
                    
                    <label htmlFor="is-important" className="flex items-center gap-2 text-slate-300">
                        <input type="checkbox" name="is-important" id="is-important" {...register("taskImportant")} className="w-4 h-4 rounded border-slate-600 bg-slate-900 text-blue-500 focus:ring-slate-500" />
                        <span>Es important</span>
                    </label>
                </div>
                
                <div>
                    <label htmlFor="task-deadline" className="block text-slate-300 text-sm font-medium mb-2">Data</label>
                    <input id="task-deadline" type="date" {...register("taskDueDate")} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500" />
                    {errors.taskDueDate && <p className="text-red-400 text-sm mt-1">{errors.taskDueDate.message}</p>}
                </div>

                <div>
                    <label htmlFor="task-description" className="block text-slate-300 text-sm font-medium mb-2">Descripció</label>
                    <textarea id="task-description" rows="4" {...register("taskDescription")} className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 resize-none"></textarea>
                    {errors.taskDescription && <p className="text-red-400 text-sm mt-1">{errors.taskDescription.message}</p>}
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">Afegir tasca</button>
            </div>
        </form>
    );
}

export default TaskForm;