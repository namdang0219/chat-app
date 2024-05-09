import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_KEY,
  authDomain: "chapapp-2f3ea.firebaseapp.com",
  projectId: "chapapp-2f3ea",
  storageBucket: "chapapp-2f3ea.appspot.com",
  messagingSenderId: "188795344570",
  appId: "1:188795344570:web:4d19547f68771a3633d483"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)