import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBibMnk9XOh72fZIcF0zs7nbXT0jJdU1Zk",
    authDomain: "sarange-ff427.firebaseapp.com",
    projectId: "sarange-ff427",
    storageBucket: "sarange-ff427.firebasestorage.app",
    messagingSenderId: "517372505368",
    appId: "1:517372505368:web:0c11e36e3908458e26026d",
    measurementId: "G-9P13PKMMV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export
export const db = getFirestore(app);
