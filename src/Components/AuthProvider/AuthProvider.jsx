import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // user saved
  const [user, setUsers] = useState({});

  // google SingIn
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // singUp email and password
  const signUpEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const loginWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // onAuthStateChanged
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsers(user);
    });
  }, []);
  console.log(user);

  // log out
  const logOut = () => {
    return signOut(auth);
  };

  // provier
  const Authentication = {
    googleLogin,
    signUpEmailPassword,
    loginWithEmailPassword,
    logOut,
    user,
  };

  return (
    <AuthContext.Provider value={Authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
