import React from "react";

const AnswerBox = ({ question, answer }) => {
    return (
        <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
            <p className="font-semibold text-gray-700 dark:text-gray-200">Q: {question}</p>
            <p className="mt-1 text-gray-800 dark:text-gray-300">A: {answer}</p>
        </div>
    );
};

export default AnswerBox;
