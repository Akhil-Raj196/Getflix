// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmflxKJHu6RJX63LWjijIKH82qPVnSsbI",
  authDomain: "my-flix-3b268.firebaseapp.com",
  projectId: "my-flix-3b268",
  storageBucket: "my-flix-3b268.firebasestorage.app",
  messagingSenderId: "912505725179",
  appId: "1:912505725179:web:3706ba35856365f541505e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);