import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const CreateAuth = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    const createAccount = (password, email) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, password, email)
    }

    const signIn = (password, email) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, password, email)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)

    }

    const provider = new GoogleAuthProvider();
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUsers => {
            setUser(currentUsers)
            setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    }, [])

    const authData = {
        user,
        loading,
        createAccount,
        signIn,
        signInGoogle,
        logOut

    };

    return < CreateAuth.Provider value={authData} >
        {children}
    </CreateAuth.Provider >
}

const useAuthData = () => {
    return useContext(CreateAuth)
}

export { AuthProvider, useAuthData }