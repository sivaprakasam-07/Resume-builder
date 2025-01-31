import { motion } from "framer-motion";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useState } from "react";

const Landing = () => {
    const [apiResponse, setApiResponse] = useState("");

    const testApiRequest = async () => {
        try {
            const response = await fetch("http://localhost:5000/generate-content", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt: "Write a short introduction about AI." }),
            });
            const data = await response.json();
            setApiResponse(data.content);
        } catch (error) {
            console.error("Error fetching API:", error);
        }
    };

=======

const Landing = () => {
>>>>>>> caeab92 (pushin my files and completed upto login page)
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-white text-center px-8">
            <div className="flex flex-col items-center space-y-8">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-semibold text-gray-800 tracking-tight"
                >
                    Build Your Resume with AI
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-xl text-gray-600 max-w-2xl"
                >
                    Generate a professional resume effortlessly with AI-powered suggestions. Perfect for job seekers!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link to="/editor" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-all duration-300">
                        Get Started
                    </Link>
                </motion.div>
<<<<<<< HEAD

                <button
                    onClick={testApiRequest}
                    className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-500 transition-all duration-300"
                >
                    Test API Request
                </button>

                {apiResponse && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">API Response:</h3>
                        <p className="text-gray-800">{apiResponse}</p>
                    </div>
                )}
=======
>>>>>>> caeab92 (pushin my files and completed upto login page)
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default Landing;
=======
export default Landing;
>>>>>>> caeab92 (pushin my files and completed upto login page)
