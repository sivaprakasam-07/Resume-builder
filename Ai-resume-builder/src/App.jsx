<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
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
            {/* Remove the Dashboard route */}
          </Routes>
          <Footer />
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Add Google OAuth provider

// Lazy load components
const Landing = lazy(() => import("./components/Landing"));
const Signup = lazy(() => import("./components/Signup"));
const Login = lazy(() => import("./components/Login"));

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID"> {/* Replace with your Google Client ID */}
      <Router>
        <AuthProvider>
          <Navbar />
          <Suspense fallback={<div className="text-center mt-10 text-gray-500">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
>>>>>>> caeab92 (pushin my files and completed upto login page)
        </AuthProvider>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;