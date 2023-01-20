import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAicjjbZS62Lj4yOU9gTTjU1Aw9OUJ2bE8",
  authDomain: "rekammedis-b4f1a.firebaseapp.com",
  projectId: "rekammedis-b4f1a",
  storageBucket: "rekammedis-b4f1a.appspot.com",
  messagingSenderId: "970959788928",
  appId: "1:970959788928:web:545de091cbe2c434d63f65",
  measurementId: "G-RFFJ52BX2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
