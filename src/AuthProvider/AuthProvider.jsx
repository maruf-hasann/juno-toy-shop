import React, { createContext, useEffect, useState } from "react";
export const authContext = createContext();
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email, password) => {
       setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
    const loginUser = (email, password) => {
       setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
    const googleLogin = () => {
       setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //    user
    useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, currentUser => {
       setUser(currentUser)
       setLoading(false)
   })
        return () => {
            return unsubscribe()
        }
    }, [])
     const logOut = () => {
       setLoading(true);
       return signOut(auth);
     };

  const authData = {
    user,
    createUser,
    loginUser,
    googleLogin,
    logOut,
  };
  return (
    <authContext.Provider value={authData}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
