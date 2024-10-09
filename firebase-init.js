// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmyuPUnT4P7aq9j-ldtEzCXH-Ob-8g4W4",
      authDomain: "project-test-4ae6c.firebaseapp.com",
      projectId: "project-test-4ae6c",
      storageBucket: "project-test-4ae6c.appspot.com",
      messagingSenderId: "727458466762",
      appId: "1:727458466762:web:13af91a97e835fb2911d33",
      measurementId: "G-H04HJF03VQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);