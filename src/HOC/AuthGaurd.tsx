/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/configs/firebase";
import PageLoader from "@/components/PageLoader/PageLoader";
import useAlert from "@/hooks/UseAlert";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const AuthGaurd = (Component: any) => {
  return function Gaurd(props: any) {
    const [userInfo, setUserInfo] = React.useState<any>(false);

    const { AlertComponent, displayAlert, alertMsg } = useAlert();

    React.useEffect((): any => {
      const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
        if (user) {
          const currUser = {
            uid: user.uid,
            email: user.email,
            displayname: user.displayName,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified /* boolean */,
            // ...user,
          };
          const userCollectionRef = collection(db, "users"); // takes only two arguments
          await getDoc(doc(userCollectionRef, `${user.uid}`)).then(
            (docSnap) => {
              setUserInfo({ ...currUser, ...docSnap.data() }); // docSnap returns a complex object but .data() converts it to the actuall stuff.
            }
          );
        } else setUserInfo(null);
      });

      return () => unsubscribe;
    }, []);

    return typeof userInfo !== "boolean" ? (
      <>
        {alertMsg.show && <AlertComponent />}
        <Component {...props} userInfo={userInfo} displayAlert={displayAlert} />
      </>
    ) : (
      <PageLoader />
    );
  };
};

export default AuthGaurd;
