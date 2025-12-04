// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAw3SzDoNomodN-ciAvv_fXZy3h12NtqJw",
  authDomain: "student-portal-4054b.firebaseapp.com",
  projectId: "student-portal-4054b",
  storageBucket: "student-portal-4054b.appspot.com",
  messagingSenderId: "240497881431",
  appId: "1:240497881431:web:51448c19b14c841fb10e12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
