import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getDoc, setDoc, doc, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAXwjcF7CyG7dUxrAEDWjQDrQQvyjF8_uY",
  authDomain: "ona-clothing.firebaseapp.com",
  projectId: "ona-clothing",
  storageBucket: "ona-clothing.appspot.com",
  messagingSenderId: "311016988214",
  appId: "1:311016988214:web:147a25160a307ab3cb4297",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithGoogleRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating User", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res;
};

export const signAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  const res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) => {
  onAuthStateChanged(auth, callback);
};
