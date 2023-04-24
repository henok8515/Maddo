
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRd_Jqy465K_9TjJyFSF9Vyqb1hxg6kjM",
  authDomain: "maddo-2230a.firebaseapp.com",
  projectId: "maddo-2230a",
  storageBucket: "maddo-2230a.appspot.com",
  messagingSenderId: "817071536589",
  appId: "1:817071536589:web:96a4516daba95c69002c84",
  measurementId: "G-4TX660ZZTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)