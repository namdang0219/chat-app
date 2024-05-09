import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getApp } from "firebase/app";

const firebaseConfig = {
	apiKey: process.env.EXPO_PUBLIC_FIREBASE_KEY,
	authDomain: "chapapp-2f3ea.firebaseapp.com",
	projectId: "chapapp-2f3ea",
	storageBucket: "chapapp-2f3ea.appspot.com",
	messagingSenderId: "188795344570",
	appId: "1:188795344570:web:4d19547f68771a3633d483",
};
// init app
const app = initializeApp(firebaseConfig);
// auth setup
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// firestore setup
export const db = getFirestore(app);
// storage setup
const firebaseApp = getApp();
export const storage = getStorage(firebaseApp, "gs://chapapp-2f3ea.appspot.com");
