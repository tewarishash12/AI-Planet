import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-[#FFFFFF] text-center">
            <div>
                <h1 className="text-6xl font-bold text-[#1F2937] mb-4">404</h1>
                <p className="text-lg text-[#64748B] mb-6">Page Not Found</p>
                <Link
                    to="/"
                    className="inline-block px-6 py-2 bg-[#FACC15] text-[#1F2937] rounded hover:bg-[#F97316]"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
