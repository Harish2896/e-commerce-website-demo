import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFZulPDg4rg49-wzZ0iu7-lxWyqBXP2Zo",
  authDomain: "crwn-clothing-db-6218f.firebaseapp.com",
  projectId: "crwn-clothing-db-6218f",
  storageBucket: "crwn-clothing-db-6218f.appspot.com",
  messagingSenderId: "1048778920159",
  appId: "1:1048778920159:web:d345527b444375b819596a",
  measurementId: "G-3WP5ST1P2F",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("Error in creating user", error.message);
    }
  }
  return userDocRef;
};
