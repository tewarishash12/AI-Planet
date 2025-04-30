import React, { useState } from "react";
import PDFUpload from "../components/PDFUpload";
import QAInterface from "../components/QAInterface";

const Home = () => {
    const [fileId, setFileId] = useState(null);

    return (
        <div className="min-h-screen bg-[#FFFFFF] text-[#1F2937] flex flex-col items-center px-4 py-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">PDF Q&A Assistant</h1>

            <div className="w-full max-w-2xl">
                <PDFUpload onUploadSuccess={(fileId) => setFileId(fileId)} />

                {fileId && (
                    <div className="mt-10">
                        <QAInterface fileId={fileId} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
