export const validatePDF = (file) => {
    const maxSizeMB = 10; // Max file size limit (10MB)
    const allowedType = "application/pdf";

    if (!file) {
        return { valid: false, error: "No file selected." };
    }

    if (file.type !== allowedType) {
        return { valid: false, error: "Only PDF files are allowed." };
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
        return { valid: false, error: `File size should be less than ${maxSizeMB}MB.` };
    }

    return { valid: true, error: "" };
};
