/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useAuth } from "../hooks/AuthContext";

const AuthGaurd = (Component: any) => {
  return function Gaurd(props: any) {
    const { userInfo } = useAuth();

    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
      if (userInfo) setUser(userInfo);
    }, [userInfo]);

    console.log("this user in Hoc", user);

    return <Component {...props} userInfo={user} />;
  };
};

export default AuthGaurd;
