import React from 'react';
import { useLocation } from 'react-router-dom';

const Preview = () => {
    const location = useLocation();
    const { resumeData } = location.state || {};

    if (!resumeData) {
        return (
            <div className="max-w-3xl mx-auto mt-24 p-6 bg-red-100 text-center rounded-2xl dark:bg-gray-900 dark:text-white">
                Error: No data to preview.
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar spacing fix */}
            <div className="flex-grow pt-24">
                <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl dark:bg-gray-900 transition-all">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
                        Resume Preview
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <p className="text-xl font-medium text-gray-700 dark:text-white">
                                <strong>Name:</strong> {resumeData.name}
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-medium text-gray-700 dark:text-white">
                                <strong>Email:</strong> {resumeData.email}
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-medium text-gray-700 dark:text-white">
                                <strong>Phone:</strong> {resumeData.phone}
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-medium text-gray-700 dark:text-white">
                                <strong>Education:</strong> {resumeData.education}
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-medium text-gray-700 dark:text-white">
                                <strong>Experience:</strong> {resumeData.experience}
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-medium text-gray-700 dark:text-white">
                                <strong>Skills:</strong> {resumeData.skills}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer fixed at bottom */}
            <div className="bg-gray-800 text-white text-center py-4 mt-8">
                <p>&copy; 2025 AI Resume Builder. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Preview;