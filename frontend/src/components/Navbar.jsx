import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { currentUser } = useAuth();

    return (
        <nav className="bg-white shadow-lg w-full fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex justify-between items-center py-5">
                    {/* Logo */}
                    <Link to="/" className="text-3xl font-semibold text-gray-800 transition-all duration-300 hover:text-blue-600">
                        ResumeAI
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-all duration-300">Home</Link>
                        <Link to="/editor" className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-all duration-300">Editor</Link>
                        <Link to="/templates" className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-all duration-300">Templates</Link>
                        <Link to="/features" className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-all duration-300">Features</Link>
                    </div>

                    {/* Conditional Login Button */}
                    {!currentUser && (
                        <Link to="/login" className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-blue-500 transition-all duration-300">
                            Login
                        </Link>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Animation */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Menu Items */}
                        <motion.div
                            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-8 z-50 md:hidden"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-800 focus:outline-none"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                ✕
                            </button>

                            <div className="flex flex-col space-y-6 mt-12 text-lg">
                                <Link to="/" className="text-gray-800 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
                                <Link to="/editor" className="text-gray-800 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Editor</Link>
                                <Link to="/templates" className="text-gray-800 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Templates</Link>
                                <Link to="/features" className="text-gray-800 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Features</Link>
                                <Link to="/login" className="bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-500 transition-all duration-300" onClick={() => setMenuOpen(false)}>
                                    Login
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;