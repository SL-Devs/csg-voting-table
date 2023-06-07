// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuhKZnbFdVOrnrRNyOPLmJ8KsISrpIlic",
    authDomain: "csg-attendance.firebaseapp.com",
    databaseURL: "https://csg-attendance-default-rtdb.firebaseio.com",
    projectId: "csg-attendance",
    storageBucket: "csg-attendance.appspot.com",
    messagingSenderId: "913037396545",
    appId: "1:913037396545:web:44d0927ee7ea4ad3f7d4c0",
    measurementId: "G-MD3YG277WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase }
    from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

export const db = getDatabase();