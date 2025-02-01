import { motion } from "framer-motion";
import { FaRobot, FaMagic, FaClock } from "react-icons/fa";

const Features = () => {
    const features = [
        { icon: <FaRobot />, title: "AI-Powered Suggestions", desc: "Get AI-generated recommendations to improve your resume instantly." },
        { icon: <FaMagic />, title: "Professional Templates", desc: "Choose from a variety of modern, ATS-friendly resume templates." },
        { icon: <FaClock />, title: "Save Time", desc: "Create a job-winning resume in minutes, without the hassle." },
    ];

    return (
        <div className="min-h-screen flex flex-col justify-center bg-white py-8">
            <div className="flex flex-col items-center px-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    How AI Helps You
                </h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="p-4 shadow-lg rounded-xl text-center bg-gray-100"
                        >
                            <div className="text-3xl text-blue-600 mb-4">{feature.icon}</div>
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                            <p className="text-gray-600 mt-2">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
