function loginForm({ register, errors, onSubmit }) {
    return (
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-slate-100 mb-6 text-center">Login Form</h2>
            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                    />
                    {errors.email && <span className="text-red-400 text-sm mt-1 block">{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="password" className="block text-slate-300 text-sm font-medium mb-2">
                        Password:
                    </label>
                    <input
                        id="password"
                        type="password"
                        {...register("password", { required: true })}
                        className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
                    />
                    {errors.password && (
                        <span className="text-red-400 text-sm mt-1 block">{errors.password.message}</span>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
export default loginForm;
