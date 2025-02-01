import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Landing = () => {
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
            </div>
        </div>
    );
};

export default Landing;