import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { useReducer } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBTO9bkTPFOCwqnl0LdwAFgXMSvIryjPAQ",
  authDomain: "crwn-clothing-db-238bc.firebaseapp.com",
  projectId: "crwn-clothing-db-238bc",
  storageBucket: "crwn-clothing-db-238bc.appspot.com",
  messagingSenderId: "973432310494",
  appId: "1:973432310494:web:a79088ba3404a2779c104f"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }


    return userDocRef
}