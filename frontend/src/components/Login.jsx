import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Google sign-in handler
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            if (result?.user) {
                toast.success('Google sign-in successful!', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
                navigate("/");
            } else {
                toast.error('Google Sign-In failed.', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            }
        } catch (error) {
            toast.error(`Google Sign-In error: ${error.message}`, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('User logged in successfully!', {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
            navigate("/");
        } catch (error) {
            toast.error(`Login error: ${error.message}`, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Login
                    </button>
                </form>

                <div className="my-4 text-center text-gray-500">OR</div>

                <button
                    className="w-full py-3 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={handleGoogleSignIn}
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M23.49 12.3c0-.75-.07-1.47-.2-2.14H12v4.03h6.18c-.26 1.37-1.02 2.53-2.13 3.17v2.63h3.44c2.02-1.86 3.17-4.61 3.17-7.68z" fill="#4285F4" />
                        <path d="M12 6.29c1.11 0 2.06.37 2.83.98l2.11-2.11C15.44 3.01 13.73 2 12 2c-3.13 0-5.79 2.1-6.75 4.92H3.06v3.8h3.58C6.21 10.72 8.91 6.29 12 6.29z" fill="#34A853" />
                        <path d="M5.25 9.91c-.26-.74-.4-1.54-.4-2.41s.14-1.67.4-2.41V3.06H3.06C2.23 4.97 2 6.29 2 7.5c0 1.21.23 2.53.81 3.44l2.44-1.03z" fill="#FBBC05" />
                        <path d="M12 2c-1.74 0-3.35.58-4.59 1.55L4.3 1.54C2.83.23 1.04 0 0 0v3.06l2.75 2.07c-.13-.33-.2-.69-.2-1.07 0-2.07 1.68-3.75 3.75-3.75 1.24 0 2.33.63 3 1.61L12 2z" fill="#EA4335" />
                    </svg>
                    Sign in with Google
                </button>
                <Toaster />
            </div>
        </div>
    );
};

export default Login;