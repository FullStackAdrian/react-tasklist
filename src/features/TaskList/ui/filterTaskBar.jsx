function FilterTaskBar({ register, errors, onSubmit }) {
    return (
        <form id="filter-form" onSubmit={onSubmit} className="mb-6 pb-6 border-b border-slate-700">
            <div className="flex gap-3">
                <input 
                    type="text" 
                    id="filter-input" 
                    placeholder="filtra per nom" 
                    {...register("filter")} 
                    className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                />
                {errors.nom && <p className="text-red-400 text-sm mt-1">{errors.nom.message}</p>}

                <button type="submit" className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium rounded-lg transition-colors">
                    Filter
                </button>
            </div>
        </form>
    );
}
export default FilterTaskBar; 