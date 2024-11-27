import { initializeApp } from "@react-native-firebase/app";
import { getFirestore } from "@react-native-firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAALfV9kQf4dP4S_eXeA4wVZMWW4Bv74KM",
  authDomain: "todoaplication-3da11.firebaseapp.com",
  projectId: "todoaplication-3da11",
  storageBucket: "todoaplication-3da11.firebasestorage.app",
  messagingSenderId: "902172056513",
  appId: "1:902172056513:web:3dfdd655a7e20e78042d40",
  measurementId: "G-PV7JD3E4QR",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
