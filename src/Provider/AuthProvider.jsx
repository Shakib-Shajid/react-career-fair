import { createContext, useEffect, useState } from "react";
// import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
// import { FaAppStore } from "react-icons/fa";
import app from '../firebase/firebase.config'
export const AuthContext = createContext(null);


const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    // loading
    const [loading, setloading] = useState(true)

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)


    }

    //sign in
    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    // logout

    const logOut = () => {
        setloading(true);
        return signOut(auth)
    }

    // user information set hpy aikhaney
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);

            setloading(false)

        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,

        signIn,
        logOut



    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;