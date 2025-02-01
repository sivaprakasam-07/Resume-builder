import React, { useState } from "react";
import { motion } from "framer-motion";

const Editor = () => {
    const [content, setContent] = useState("");

    return (
        <div className="max-w-3xl mx-auto mt-34 p-6 mb-35 bg-white shadow-lg rounded-2xl dark:bg-gray-900 transition-all">
            <motion.h2
                className="text-3xl font-semibold text-center text-gray-800 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Resume Editor
            </motion.h2>

            <motion.textarea
                className="w-full mt-6 p-4 border rounded-lg text-gray-800 dark:text-white 
                bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 
                focus:ring-blue-500 transition-all resize-none h-40"
                placeholder="Write your resume details here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            />

            <motion.button
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg 
                font-semibold transition-all shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Save & Preview
            </motion.button>
        </div>
    );
};

export default Editor;
