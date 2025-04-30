import React from "react";

const QuestionModal = ({ isOpen, onClose, onSubmit, question, setQuestion, loading }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-11/12 max-w-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Ask a Question</h3>
                <textarea
                    className="w-full p-3 border rounded dark:bg-gray-700 dark:text-white"
                    rows={4}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="What do you want to know?"
                />
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSubmit}
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        {loading ? "Asking..." : "Ask"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionModal;
