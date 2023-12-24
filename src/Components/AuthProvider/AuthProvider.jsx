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
import Loader from "../Loader/Loader";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // user saved
  const [user, setUsers] = useState({});

  // google SingIn
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // singUp email and password
  const signUpEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const loginWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // onAuthStateChanged
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
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
    loading,
  };

  return (
    <AuthContext.Provider value={Authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
