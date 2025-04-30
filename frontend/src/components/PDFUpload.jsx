import React, { useState } from "react";
import { uploadPDF } from "../services/api";
import { validatePDF } from "../utils/fileValidator";

const PDFUpload = ({ onUploadSuccess }) => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!validatePDF(selectedFile)) {
            setError("Invalid file type. Please upload a PDF.");
            return;
        }
        setError("");
        setFile(selectedFile);
    };

    const handleUpload = async () => {
        if (!file) return;
    
        setUploading(true);
        try {
            const response = await uploadPDF(file);
            const { file_id } = response;
            onUploadSuccess(file_id); // Pass only file_id
            setFile(null);
        } catch (err) {
            setError("Failed to upload PDF: " + (err.detail || err.message));
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="p-6 border rounded-xl bg-[#FFFFFF] shadow-md">
            <label className="block mb-2 text-sm font-medium text-[#1F2937]">
                Upload a PDF
            </label>
            <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="w-full mb-4"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
                onClick={handleUpload}
                disabled={!file || uploading}
                className="px-4 py-2 bg-[#FACC15] text-[#1F2937] rounded hover:bg-[#F97316] disabled:bg-gray-400"
            >
                {uploading ? "Uploading..." : "Upload PDF"}
            </button>
        </div>
    );
};

export default PDFUpload;