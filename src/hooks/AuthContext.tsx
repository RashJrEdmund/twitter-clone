/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../configs/firebase";

type formType = {
  email: string;
  password: string;
};

type reactType = {
  children: React.ReactNode;
};

export const useAuth = () => useContext(AuthContext);

const AuthContext = createContext({});

export function AuthContextProvider({ children }: reactType) {
  const [currentUser, setCurrentUser] = useState<any>();
  useEffect((): any => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user)
        setCurrentUser({
          uid: user.uid,
          email: user.email,
          displayname: user.displayName,
        });
    });

    return () => unsubscribe;
  }, []);

  const signup = async (formData: formType) => {
    const { email, password } = formData;
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginWithEmailPassword = async (formData: formType) => {
    const { email, password } = formData;

    if (!email || !password) {
      //   displayAlert('input all fields');
      return;
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("email password signup res", res);
      })
      .catch((e) => console.log(e)); // takes 3 parameters auth eamil and password
  };

  const logout = async () => {
    await signOut(auth);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, LoginWithEmailPassword, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
