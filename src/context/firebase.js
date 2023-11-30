import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app"
import { createUserWithEmailAndPassword, getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"


const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext)


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig)

const firebaseAuth = getAuth(firebaseApp)


export const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }
    const setUpRecaptcha = (number) => {
        const recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, 'recaptcha-container')
        recaptchaVerifier.render()
        return signInWithPhoneNumber(firebaseAuth, number, recaptchaVerifier)
    }
    return (
        <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, setUpRecaptcha }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}