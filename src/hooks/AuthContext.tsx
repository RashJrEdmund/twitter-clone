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
  setLoader?: ({}: any) => void;
};

type reactType = {
  children: React.ReactNode;
};

type logType = {
  login: boolean;
  signup: boolean;
  emailPass: boolean;
  createAcc: boolean;
  completeSignup: boolean;
  confirmPassword: boolean;
  forgotPass?: boolean;
};

export const useAuth: any = () => useContext(AuthContext);

const AuthContext = createContext({});

export function AuthContextProvider({ children }: reactType) {
  const [userInfo, setUserInfo] = useState<any>();
  const [data, setData] = useState<boolean>(false);

  const [logs, setLogs] = useState<logType>({
    login: false,
    signup: false,
    emailPass: false,
    forgotPass: false,
    createAcc: false,
    completeSignup: false,
    confirmPassword: false,
  });

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

  const logFunctions = {
    loginModal: () =>
      setLogs({
        signup: false,
        emailPass: false,
        createAcc: false,
        completeSignup: false,
        confirmPassword: false,
        login: true,
      }),

    signupModal: () =>
      setLogs({
        login: false,
        emailPass: false,
        createAcc: false,
        completeSignup: false,
        confirmPassword: false,
        signup: true,
      }),

    createAccModal: () =>
      setLogs({
        login: false,
        emailPass: false,
        signup: false,
        completeSignup: false,
        confirmPassword: false,
        createAcc: true,
      }),

    toCompleteSignupModal: () =>
      setLogs({
        login: false,
        emailPass: false,
        signup: false,
        createAcc: false,
        confirmPassword: false,
        completeSignup: true,
      }),

    toConfirmPasswordModal: () =>
      setLogs({
        login: false,
        emailPass: false,
        signup: false,
        createAcc: false,
        completeSignup: false,
        confirmPassword: true,
      }),

    toEmailPass: () =>
      setLogs({
        login: false,
        signup: false,
        createAcc: false,
        completeSignup: false,
        confirmPassword: false,
        emailPass: true,
      }),

    closeLog: () => {
      sessionStorage.removeItem("log");
      sessionStorage.removeItem("signData");
      setLogs({
        login: false,
        signup: false,
        createAcc: false,
        completeSignup: false,
        confirmPassword: false,
        emailPass: false,
      });
    },
  };

  const signupWithEmailPassword = async (formData: formType) => {
    const { email, password, setLoader } = formData;
    await createUserWithEmailAndPassword(auth, email, password).finally(() => {
      if (setLoader) setLoader({ loading: false, message: "could_not_login" });
    });
  };

  const LoginWithEmailPassword = async (formData: formType) => {
    const { email, password, setLoader } = formData;

    if (!email || !password) {
      //   displayAlert('input all fields');
      return;
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("email password signup res", res);
      })
      .catch((e) => console.log("this error", e)) // takes 3 parameters auth eamil and password
      .finally(
        () =>
          setLoader && setLoader({ loading: false, message: "could_not_login" })
      );
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, googleProvider).catch((e) => console.log(e)); // takes 2 parameters auth and googleProvider
  };

  const logout = async () => {
    await signOut(auth).finally(() => {
      setUserInfo(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        data,
        LoginWithEmailPassword,
        signupWithEmailPassword,
        googleLogin,
        logout,
        logFunctions,
        logs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
