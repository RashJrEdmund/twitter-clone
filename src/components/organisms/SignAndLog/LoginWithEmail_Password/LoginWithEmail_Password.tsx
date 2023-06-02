import React, { useEffect, useState } from "react";

import {
  SignInput,
  StyledHeader,
  Overlay,
  CancelBtn,
  StyledTwitterIcon,
} from "../../../atoms/LoginRegistAtoms";
import SignButton from "../../../atoms/SignButton";

import AnchorTag from "../../../atoms/AnchorTag";
import StyledSingIn_Login from "../../../molecules/StyledSingIn_Login";
import { useAuth } from "@/hooks/AuthContext";

type Props = {
  open: boolean;
  closeLog: () => void;
  signupModal: () => void;
};

export default function LoginWithEmail_Password({
  open,
  closeLog,
  signupModal,
}: Props) {
  const {
    LoginWithEmailPassword,
    logFunctions: { loginModal },
  } = useAuth();

  const [data, setData] = useState<any>({});
  const [password, setPassword] = useState<string>("");
  const [loader, setLoader] = useState<{ loading: boolean; message: string }>({
    loading: false,
    message: "",
  });

  useEffect(() => {
    const log = sessionStorage.getItem("log");
    /* logs from sessionStorage initially set
    to seession at Login modal onClick of the next button
    */

    if (log) setData(JSON.parse(log));
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!password) return console.error("no password found");

    setLoader({ loading: true, message: "" });

    if (data.type === "email") {
      const formData = { email: data.detail, password, setLoader };
      LoginWithEmailPassword(formData);
    } else setLoader({ loading: false, message: "could_not_login" });
  };

  return (
    <StyledSingIn_Login open={open}>
      <Overlay />

      <form className="container" onSubmit={handleSubmit}>
        <CancelBtn onClick={closeLog} />

        <StyledTwitterIcon />

        {loader.loading && <p>Loading...</p>}

        <StyledHeader color="#000" weight="600" size="30px" align="left">
          Enter your phone number or email address
        </StyledHeader>

        <AnchorTag fill align="left">
          {data?.type || "username"}: {data?.detail || ""}
        </AnchorTag>

        {loader.message === "could_not_login" && (
          <p style={{ color: "red" }}>incorrect {data.type} or password</p>
        )}

        <SignInput
          error={loader.message === "could_not_login"}
          // placeholder="Phone, email address or username"
          placeholder="password"
          maxW="unset"
          onChange={({ target: { value } }: any) => setPassword(value)}
        />

        {loader.message === "could_not_login" && (
          <AnchorTag link fill align="right" onClick={loginModal}>
            change {data.type}
          </AnchorTag>
        )}

        <SignButton
          color="#fff"
          bg="#000"
          padd="9px 70px"
          fill
          maxW="unset"
          margin="5rem 0 0"
          type="submit"
        >
          Next
        </SignButton>
      </form>
    </StyledSingIn_Login>
  );
}
