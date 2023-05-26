/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useAuth } from "../hooks/AuthContext";

const AuthGaurd = (Component: any) => {
  return function Gaurd(props: any) {
    const { currentUser } = useAuth();

    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
      if (currentUser) setUser(currentUser);
    }, [currentUser]);

    console.log("this currentUser in Hoc", currentUser);

    return    <Component {...props} currentUser={user} />
  };
};

export default AuthGaurd;
