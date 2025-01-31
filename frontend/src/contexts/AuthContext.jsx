import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    const googleSignIn = async (tokenId) => {
        const response = await fetch("YOUR_BACKEND_URL", {
            method: "POST",
            body: JSON.stringify({ tokenId }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        if (data.user) {
            setCurrentUser(data.user);
            navigate("/dashboard");
        } else {
            console.log("Login failed!");
        }
    };

    const logout = () => {
        setCurrentUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ googleSignIn, logout, currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};