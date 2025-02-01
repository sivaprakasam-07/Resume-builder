import React from 'react';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';

const SignOut = () => {
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            console.log("User signed out");
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    };

    return (
        <button
            onClick={handleSignOut}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition-all duration-300"
        >
            Sign Out
        </button>
    );
};

export default SignOut;