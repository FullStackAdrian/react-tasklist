function CheckboxInput({ options, register, errors }) {
    return (
        <div className="flex gap-6">
            {options.map((option) => (
                <label 
                    key={option.name} 
                    htmlFor={option.name} 
                    className="flex items-center gap-2 text-slate-300"
                >
                    <input
                        type="checkbox"
                        name={option.name}
                        id={option.name}
                        {...register(option.registerName)}
                        className="w-4 h-4 rounded border-slate-600 bg-slate-900 text-blue-500 focus:ring-slate-500"
                    />
                    <span>{option.label}</span>
                    {errors[option.registerName] && (
                        <p className="text-red-400 text-sm mt-1">{errors[option.registerName].message}</p>
                    )}
                </label>
            ))}
        </div>
    );
}

export default CheckboxInput;