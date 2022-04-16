// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeuCy0TZSGLJysqY95BHcqQEJP682CV3o",
    authDomain: "nutrition-by-ameera.firebaseapp.com",
    projectId: "nutrition-by-ameera",
    storageBucket: "nutrition-by-ameera.appspot.com",
    messagingSenderId: "192356266550",
    appId: "1:192356266550:web:4eaebcf34501f659205e97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;