// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADg8A5WfGjBM-UgWpIJL4jM6PxRcRmzqQ",
    authDomain: "csg-votingsystem.firebaseapp.com",
    databaseURL: "https://csg-votingsystem-default-rtdb.firebaseio.com",
    projectId: "csg-votingsystem",
    storageBucket: "csg-votingsystem.appspot.com",
    messagingSenderId: "811788305928",
    appId: "1:811788305928:web:2951af01d59669867eb3bd",
    measurementId: "G-SXWFGMN1FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase }
    from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

export const db = getDatabase();