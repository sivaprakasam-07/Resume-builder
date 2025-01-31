import React from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const GoogleAuth = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 to-teal-600">
      <button
        onClick={handleGoogleSignIn}
        className="bg-white text-gray-800 py-2 px-6 rounded-lg shadow-md hover:bg-teal-500 hover:text-white transition-all duration-300"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleAuth;