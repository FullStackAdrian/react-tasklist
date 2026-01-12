function Button({ text, onClick, type = "button", variant = "primary" }) {
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700",
        success: "bg-green-600 hover:bg-green-700",
        danger: "bg-red-600 hover:bg-red-700",
        warning: "bg-yellow-600 hover:bg-yellow-700",
        secondary: "bg-slate-700 hover:bg-slate-600"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full ${variants[variant]} text-white font-medium py-2.5 px-4 rounded-lg transition-colors`}
        >
            {text}
        </button>
    );
}

export default Button;