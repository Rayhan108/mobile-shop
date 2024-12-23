import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  
} from "firebase/auth";
import { app } from "../firebase/firebase.congiq";
// import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      // console.log(currentUser);

      //get jwt token 
      // if(currentUser){
      //   axios.post("http://localhost:5000/authentication",{ email:currentUser?.email,
      //   }).then((data)=>{
      //     if(data?.data){
      //       localStorage.setItem("access-token",data?.data?.token);
      //       setLoader(false)
      //     }
      //   })
      // }else{
      //   localStorage.removeItem("access-token");
      //   setLoader(false);
      // }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // create new user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   signIn with email & pass
  const SignIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   for logout
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };

  // google login
  const googleSignIn = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  // console.log(user);

  const authInfo = {
    user,
    loader,
    createUser,
    SignIn,
    logout,
    googleSignIn,
    setLoader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
