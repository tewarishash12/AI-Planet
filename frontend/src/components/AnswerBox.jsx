import React from "react";

const AnswerBox = ({ question, answer }) => {
    return (
        <div className="p-4 border border-[#E5E7EB] rounded-lg bg-[#FFFFFF]">
            <p className="font-semibold text-[#64748B]">Q: {question}</p>
            <p className="mt-1 text-[#1F2937]">A: {answer}</p>
        </div>
    );
};

export default AnswerBox;
