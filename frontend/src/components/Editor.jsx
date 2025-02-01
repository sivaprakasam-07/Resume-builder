// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";  // Import useNavigate

// const Editor = () => {
//     // State for each section of the resume
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [education, setEducation] = useState("");
//     const [experience, setExperience] = useState("");
//     const [skills, setSkills] = useState("");

//     const navigate = useNavigate();  // Initialize useNavigate

//     const handleSave = () => {
//         const resumeData = {
//             name,
//             email,
//             phone,
//             education,
//             experience,
//             skills,
//         };

//         // Here you could save this data to local storage or send it to the backend.
//         console.log(resumeData);  // Just logs the data for now

//         // Redirect to the preview page after saving
//         navigate("/preview");  // Redirect to /preview
//     };

//     return (
//         <div className="max-w-3xl mx-auto mt-28 p-6 mb-8 bg-white shadow-lg rounded-2xl dark:bg-gray-900 transition-all">
//             <motion.h2
//                 className="text-3xl font-semibold text-center text-gray-800 dark:text-white"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//             >
//                 Resume Editor
//             </motion.h2>

//             <div className="mt-6">
//                 <label className="block text-gray-700 dark:text-white">Name</label>
//                 <motion.input
//                     className="w-full mt-2 p-4 border rounded-lg text-gray-800 dark:text-white 
//                     bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 
//                     focus:ring-blue-500 transition-all"
//                     type="text"
//                     placeholder="Enter your name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                 />
//             </div>

//             <div className="mt-6">
//                 <label className="block text-gray-700 dark:text-white">Email</label>
//                 <motion.input
//                     className="w-full mt-2 p-4 border rounded-lg text-gray-800 dark:text-white 
//                     bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 
//                     focus:ring-blue-500 transition-all"
//                     type="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                 />
//             </div>

//             <div className="mt-6">
//                 <label className="block text-gray-700 dark:text-white">Phone Number</label>
//                 <motion.input
//                     className="w-full mt-2 p-4 border rounded-lg text-gray-800 dark:text-white 
//                     bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 
//                     focus:ring-blue-500 transition-all"
//                     type="tel"
//                     placeholder="Enter your phone number"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                 />
//             </div>

//             <div className="mt-6">
//                 <label className="block text-gray-700 dark:text-white">Education</label>
//                 <motion.textarea
//                     className="w-full mt-2 p-4 border rounded-lg text-gray-800 dark:text-white 
//                     bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 
//                     focus:ring-blue-500 transition-all resize-none h-40"
//                     placeholder="Enter your education details"
//                     value={education}
//                     onChange={(e) => setEducation(e.target.value)}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                 />
//             </div>

//             <div className="mt-6">
//                 <label className="block text-gray-700 dark:text-white">Work Experience</label>
//                 <motion.textarea
//                     className="w-full mt-2 p-4 border rounded-lg text-gray-800 dark:text-white 
//                     bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 
//                     focus:ring-blue-500 transition-all resize-none h-40"
//                     placeholder="Enter your work experience"
//                     value={experience}
//                     onChange={(e) => setExperience(e.target.value)}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                 />
//             </div>

//             <div className="mt-6">
//                 <label className="block text-gray-700 dark:text-white">Skills</label>
//                 <motion.textarea
//                     className="w-full mt-2 p-4 border rounded-lg text-gray-800 dark:text-white 
//                     bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 
//                     focus:ring-blue-500 transition-all resize-none h-40"
//                     placeholder="Enter your skills"
//                     value={skills}
//                     onChange={(e) => setSkills(e.target.value)}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                 />
//             </div>

//             <motion.button
//                 className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg 
//                   font-semibold transition-all shadow-md"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleSave} // Calls handleSave and redirects to Preview
//             >
//                 Save & Preview
//             </motion.button>
//         </div>
//     );
// };

// export default Editor;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditorPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        education: "",
        experience: "",
        skills: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to the Preview page with the form data
        navigate("/preview", { state: { resumeData: formData } });
    };

    const { name, email, phone, education, experience, skills } = formData;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Edit Your Resume</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Education</label>
                        <input
                            type="text"
                            name="education"
                            value={education}
                            onChange={handleChange}
                            placeholder="Enter your education"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Experience</label>
                        <input
                            type="text"
                            name="experience"
                            value={experience}
                            onChange={handleChange}
                            placeholder="Enter your experience"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Skills</label>
                        <input
                            type="text"
                            name="skills"
                            value={skills}
                            onChange={handleChange}
                            placeholder="Enter your skills"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Resume</button>
                </form>
            </div>
        </div>
    );
};

export default EditorPage;