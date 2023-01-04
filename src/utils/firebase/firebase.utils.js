import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAXwjcF7CyG7dUxrAEDWjQDrQQvyjF8_uY",
  authDomain: "ona-clothing.firebaseapp.com",
  projectId: "ona-clothing",
  storageBucket: "ona-clothing.appspot.com",
  messagingSenderId: "311016988214",
  appId: "1:311016988214:web:147a25160a307ab3cb4297",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
