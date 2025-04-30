import React from "react";

const QuestionModal = ({ isOpen, onClose, onSubmit, question, setQuestion, loading }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-xl w-11/12 max-w-lg">
                <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Ask a Question</h3>
                <textarea
                    className="w-full p-3 border rounded text-[#1F2937] placeholder-[#64748B]"
                    rows={4}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="What do you want to know?"
                />
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-[#64748B] text-white rounded hover:bg-[#64748B] disabled:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSubmit}
                        disabled={loading}
                        className="px-4 py-2 bg-[#FACC15] text-[#1F2937] rounded hover:bg-[#F97316] disabled:bg-gray-400"
                    >
                        {loading ? "Asking..." : "Ask"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionModal;
