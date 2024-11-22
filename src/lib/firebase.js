// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chit-chat-2f119.firebaseapp.com",
  projectId: "chit-chat-2f119",
  storageBucket: "chit-chat-2f119.firebasestorage.app",
  messagingSenderId: "454276316844",
  appId: "1:454276316844:web:1944d51776241e8800e909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()