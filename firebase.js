import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBNs21iTXcqkk_bp8OCnuEdbr2de4LafCo",
  authDomain: "fir-auth-2e7c0.firebaseapp.com",
  projectId: "fir-auth-2e7c0",
  storageBucket: "fir-auth-2e7c0.appspot.com",
  messagingSenderId: "571928447257",
  appId: "1:571928447257:web:0081accfbe9e80b78a1d88"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const db = getFirestore(app);



