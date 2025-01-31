// src/components/Home.jsx
import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-semibold text-center text-gray-800">Welcome to Your Dashboard</h1>
                <p className="text-lg text-gray-600 mt-4 text-center">
                    You are successfully logged in! Explore the features and manage your resume efficiently.
                </p>

                <div className="mt-6 flex justify-center gap-6">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none">
                        Explore Features
                    </button>
                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none">
                        Manage Your Resumes
                    </button>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 text-sm">Need assistance? Contact support.</p>
                    <a
                        href="mailto:support@example.com"
                        className="text-blue-500 hover:text-blue-600 text-sm"
                    >
                        support@example.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
