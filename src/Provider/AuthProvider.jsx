import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { auth } from "../Firebase/Firebase.config";


export const AuthContext =createContext();
const AuthProvider = ({children}) => {
    const googleProvider =new GoogleAuthProvider()
const [user, setUser] = useState(null)
const [loading , setLoading] = useState(true)


// Create User 
const createUser = (email, password) => {
    setLoading(true)
  return  createUserWithEmailAndPassword(auth, email, password)

}

// Google login 
const loginWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

// Sign in 
const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

// Sign Out 
const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}


 useEffect(()=>{
    
        const unSubscribe = onAuthStateChanged( auth, currentUser=>{
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
         });
         return ()=>{
            unSubscribe()
         }

    }, [])



const userInfo = {
    user,
    createUser,
    loginWithGoogle,
    login,
    loading,
    logOut
}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;