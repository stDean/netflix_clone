// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, getDoc, doc, addDoc, collection } from 'firebase/firestore';

// import { seedDatabase } from "../seed";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt6bay-VoP_06eVa0UaSbZGw4G6ju1G_Y",
  authDomain: "netflix-clone-a690c.firebaseapp.com",
  projectId: "netflix-clone-a690c",
  storageBucket: "netflix-clone-a690c.appspot.com",
  messagingSenderId: "842742264996",
  appId: "1:842742264996:web:8eff3a060d8abba034a231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

// Adding the seedData to the db once
// seedDatabase(db, addDoc, collection)

// Storing user in the fire store database
export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // if userAuth get the user from the collection of users in the db
  const usersRef = doc(db, `users/${userAuth.uid}`);

  // get the user info
  const snapShot = await getDoc(usersRef)

  // if user doesn't exist create a new user.
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().toISOString();

    try {
      await setDoc(usersRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  // return the userRef if the user exists
  return usersRef;
}