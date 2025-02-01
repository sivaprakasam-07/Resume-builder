require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
<<<<<<< HEAD
const path = require("path");
=======
>>>>>>> 9f689a3 (added google authentication,created backend,added toastify notification popup,editor page,template page)

// Initialize Express App
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load Firebase Service Account Key (Correct Path)
<<<<<<< HEAD
const serviceAccount = require(path.resolve(process.env.FIREBASE_ADMIN_SDK_PATH));
=======
const serviceAccount = require("./config/firebase-adminsdk.json");
>>>>>>> 9f689a3 (added google authentication,created backend,added toastify notification popup,editor page,template page)

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

console.log("✅ Firebase Admin Initialized Successfully!");

// Sample API Route
app.get("/", (req, res) => {
    res.send("🔥 Server is running!");
});

// Start the Server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> 9f689a3 (added google authentication,created backend,added toastify notification popup,editor page,template page)
