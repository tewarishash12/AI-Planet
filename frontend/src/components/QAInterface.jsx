import React, { useState } from "react";
import { askQuestion } from "../services/api";
import AnswerBox from "./AnswerBox";

const QAInterface = ({ fileId }) => {
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleAsk = async () => {
        if (!question.trim()) return;
        setLoading(true);
        try {
            const res = await askQuestion(fileId, question);
            setAnswers((prev) => [...prev, { question, answer: res.answer }]);
            setQuestion("");
        } catch (err) {
            console.error(err.message);
            setAnswers((prev) => [...prev, { question, answer: "Error fetching answer." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-6 p-6 border rounded-xl bg-white shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Ask a Question</h2>
            <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={3}
                className="w-full p-2 border rounded mb-4"
                placeholder="Type your question here..."
            />
            <button
                onClick={handleAsk}
                disabled={loading}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
                {loading ? "Fetching answer..." : "Ask"}
            </button>

            <div className="mt-6 space-y-4">
                {answers.map((entry, index) => (
                    <AnswerBox key={index} question={entry.question} answer={entry.answer} />
                ))}
            </div>
        </div>
    );
};

export default QAInterface;
