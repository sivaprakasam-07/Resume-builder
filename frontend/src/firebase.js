import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // ✅ Fixed imports

const firebaseConfig = {
    apiKey: "AIzaSyCvh09qx6nbXT3XJSHWVorfK7QZNPOn63M",
    authDomain: "resume-builder-07.firebaseapp.com",
    projectId: "resume-builder-07",
    storageBucket: "resume-builder-07.appspot.com", // ✅ Fixed storageBucket typo
    messagingSenderId: "126664939110",
    appId: "1:126664939110:web:8a6fc8f407ce961d02bfa7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup }; // ✅ Now correctly exported
