// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBK-jgOB6UZyf3ujWgLs94CFw94nJ4Oo8",
  authDomain: "sba308a.firebaseapp.com",
  projectId: "sba308a",
  storageBucket: "sba308a.appspot.com",
  messagingSenderId: "781536039782",
  appId: "1:781536039782:web:aef26bbfb8c988a9416ea7",
  measurementId: "G-DNXW000RMJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
