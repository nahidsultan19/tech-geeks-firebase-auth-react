// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0CMsnLE3Y8CtfpOKn5G_Hcc2drGoNQdk",
    authDomain: "tech-geeks-3193a.firebaseapp.com",
    projectId: "tech-geeks-3193a",
    storageBucket: "tech-geeks-3193a.appspot.com",
    messagingSenderId: "1023952714151",
    appId: "1:1023952714151:web:00436f5565729cb3221e82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);