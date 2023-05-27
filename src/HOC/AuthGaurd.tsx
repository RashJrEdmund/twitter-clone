/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configs/firebase";
import PageLoader from "@/components/PageLoader/PageLoader";

const AuthGaurd = (Component: any) => {
  return function Gaurd(props: any) {
    const [userInfo, setUserInfo] = React.useState<any>(false);

    React.useEffect((): any => {
      const unsubscribe = onAuthStateChanged(auth, (user: any) => {
        console.log(user, typeof user);

        if (user) {
          setUserInfo({
            uid: user.uid,
            email: user.email,
            displayname: user.displayName,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified /* boolean */,
            // ...user,
          });
        } else setUserInfo(null);
      });

      return () => unsubscribe;
    }, []);

    return typeof userInfo !== "boolean" ? (
      <Component {...props} userInfo={userInfo} />
    ) : (
      <PageLoader />
    );
  };
};

export default AuthGaurd;
