import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-center">
            <div>
                <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Page Not Found</p>
                <Link
                    to="/"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
