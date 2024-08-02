import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjNyVgqZkGZzgLuS047SxIDY0zf6OHz1Q",
  authDomain: "portfolio-f591f.firebaseapp.com",
  projectId: "portfolio-f591f",
  storageBucket: "portfolio-f591f.appspot.com",
  messagingSenderId: "94605394852",
  appId: "1:94605394852:web:26e3ec9e69b9992790f731",
  measurementId: "G-4N3Q9FG5YF",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
