/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth, googleProvider } from "../configs/firebase";

type formType = {
  email: string;
  password: string;
};

type reactType = {
  children: React.ReactNode;
};

export const useAuth: any = () => useContext(AuthContext);

const AuthContext = createContext({});

export function AuthContextProvider({ children }: reactType) {
  const [userInfo, setUserInfo] = useState<any>();
  const [data, setData] = useState<boolean>(false);

  useEffect((): any => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user && !data) {
        setData(true);
        setUserInfo({
          uid: user.uid,
          email: user.email,
          displayname: user.displayName,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified /* boolean */,
          // ...user,
        });
      }
    });

    return () => unsubscribe;
  }, [data]);

  const signupWithEmailPassword = async (formData: formType) => {
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

  const googleLogin = async () => {
    await signInWithPopup(auth, googleProvider).catch((e) => console.log(e)); // takes 2 parameters auth and googleProvider
  };

  const logout = async () => {
    await signOut(auth);
    setUserInfo(null);
  };

  // logout();

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        data,
        LoginWithEmailPassword,
        signupWithEmailPassword,
        googleLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
