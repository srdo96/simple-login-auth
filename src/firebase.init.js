// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiVEHBzi3ihoaY0BP7gS5HNa8cgZ9Rhfw",
  authDomain: "simple-firebase-authenti-99014.firebaseapp.com",
  projectId: "simple-firebase-authenti-99014",
  storageBucket: "simple-firebase-authenti-99014.appspot.com",
  messagingSenderId: "884654027919",
  appId: "1:884654027919:web:c84612f8164308f3852cfa",
  measurementId: "G-LLMCWPFD8T",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
export default firebaseApp;
