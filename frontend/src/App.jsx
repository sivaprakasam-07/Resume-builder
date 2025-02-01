import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <GoogleOAuthProvider clientId="894732763732-5h6ccvuusetj810n1l2jukrqc59vfkcr.apps.googleusercontent.com">
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;