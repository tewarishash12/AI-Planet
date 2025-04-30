import React, { useState } from "react";
import { askQuestion } from "../services/api";
import AnswerBox from "./AnswerBox";
import QuestionModal from "./QuestionModal";

const QAInterface = ({ fileId }) => {
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAsk = async () => {
        if (!question.trim()) return;
        setLoading(true);
        try {
            const res = await askQuestion(fileId, question);
            setAnswers((prev) => [...prev, { question, answer: res.answer }]);
            setQuestion("");
            setIsModalOpen(false);
        } catch (err) {
            console.error(err.message);
            setAnswers((prev) => [...prev, { question, answer: "Error fetching answer." }]);
            setIsModalOpen(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-6 p-6 border rounded-xl bg-white shadow-md dark:bg-gray-800">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Ask a Question</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    + Ask
                </button>
            </div>

            <div className="space-y-4">
                {answers.map((entry, index) => (
                    <AnswerBox key={index} question={entry.question} answer={entry.answer} />
                ))}
            </div>

            <QuestionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAsk}
                question={question}
                setQuestion={setQuestion}
                loading={loading}
            />
        </div>
    );
};

export default QAInterface;