/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useAuth } from "../hooks/AuthContext";
import { readFromSession, updateSession } from "@/services/utils";

const AuthGaurd = (Component: any) => {
  return function Gaurd(props: any) {
    const { userInfo } = useAuth();

    const sessionData = readFromSession();

    const [user, setUser] = React.useState(sessionData);

    React.useEffect(() => {
      if (userInfo) {
        setUser(userInfo);
        updateSession(userInfo);
      }
    }, [userInfo]);

    return <Component {...props} userInfo={user} />;
  };
};

export default AuthGaurd;
