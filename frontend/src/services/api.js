import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const uploadPDF = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { detail: "File upload failed" };
    }
};

export const askQuestion = async (fileId, question) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/ask`, {
            file_id: fileId,
            question,
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { detail: "Question answering failed" };
    }
};
