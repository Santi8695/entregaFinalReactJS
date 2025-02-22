import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "prueba-firebase-sld.firebaseapp.com",
  projectId: "prueba-firebase-sld",
  storageBucket: "prueba-firebase-sld.firebasestorage.app",
  messagingSenderId: "674993948766",
  appId: "1:674993948766:web:c99b86ca8d7ec1550a4ccf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

