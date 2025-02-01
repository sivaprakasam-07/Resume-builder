import React from "react";
import { motion } from "framer-motion";

const Template = () => {
    return (
        <div className="max-w-5xl mx-auto mt-30 mb-27 p-6 bg-white shadow-lg rounded-2xl dark:bg-gray-900 transition-all">
            <motion.h2
                className="text-3xl font-bold text-center text-gray-800 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Resume Templates
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {[1, 2, 3].map((template) => (
                    <motion.div
                        key={template}
                        className="p-5 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded-md flex items-center justify-center">
                            <span className="text-xl text-gray-700 dark:text-gray-300">Template {template}</span>
                        </div>
                        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all">
                            Use Template
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Template;
