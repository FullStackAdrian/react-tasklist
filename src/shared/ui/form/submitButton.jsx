function SubmitButton({ text }) {
    return (
        <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
            {text}
        </button>
    );
}

export default SubmitButton;