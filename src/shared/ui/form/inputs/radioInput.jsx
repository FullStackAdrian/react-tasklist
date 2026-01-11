function RadioInput({ name, label, options, register, errors }) {
    return (
        <div>
            <label htmlFor={name} className="block text-slate-300 text-sm font-medium mb-2">
                {label}
            </label>
            <div className="flex flex-col space-y-2">
                {options.map((option) => (
                    <div key={option.value}>
                        <input
                            id={name + option.value}
                            type="radio"
                            name={name}
                            value={option.value}
                            {...register(name)}
                            className="mr-2"
                        />
                        <label htmlFor={name + option.value} className="text-slate-300 text-sm">
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
            {errors[name] && <p className="text-red-400 text-sm mt-1">{errors[name].message}</p>}
        </div>
    );
}

export default RadioInput;
