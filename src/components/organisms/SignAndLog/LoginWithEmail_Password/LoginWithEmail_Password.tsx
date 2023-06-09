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
  toForgotPassword: () => void;
};

export default function LoginWithEmail_Password({
  open,
  closeLog,
  toForgotPassword,
}: Props) {
  const { LoginWithEmailPassword } = useAuth();

  const [data, setData] = useState<any>({});
  const [password, setPassword] = useState<string>("");
  const [formErr, setFormErr] = useState<boolean>(false);
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!password.trim() || password.length < 6) return setFormErr(true);

    setLoader({ loading: true, message: "" });

    if (data.type === "email") {
      const formData = { email: data.detail, password, setLoader };
      await LoginWithEmailPassword(formData);
      closeLog();
    } else setLoader({ loading: false, message: "could_not_login" });
  };

  const handleForgotPass = () => {
    toForgotPassword();
  };

  const handleInput = ({ target: { value } }: any) => {
    setPassword(value);
    if (formErr) setFormErr(false);
  };

  return (
    <StyledSingIn_Login open={open}>
      <Overlay />

      <form className="container" onSubmit={handleSubmit}>
        <CancelBtn onClick={closeLog} />

        <StyledTwitterIcon />

        {loader.loading && <p>Loading...</p>}

        {data.type === "email" ? (
          <StyledHeader color="#000" weight="600" size="30px" align="left">
            Enter your phone number or username
          </StyledHeader>
        ) : (
          <StyledHeader color="#000" weight="600" size="30px" align="left">
            Enter your password
          </StyledHeader>
        )}

        {data.type === "email" ? (
          <AnchorTag fill align="left">
            There was unusual login activity on your account. To help keep your
            account safe, please enter your phone number or username to verify
            that it’s you.
          </AnchorTag>
        ) : (
          <AnchorTag fill align="left">
            {data.type}: {data?.detail}
          </AnchorTag>
        )}

        {loader.message === "could_not_login//remove_this_part" && (
          <p style={{ color: "red" }}>incorrect {data.type} or password</p>
        )}

        <SignInput
          minLength={6}
          type="password"
          placeholder="password"
          maxW="unset"
          error={formErr}
          onChange={handleInput}
        />

        <AnchorTag link fill align="left" onClick={handleForgotPass}>
          fogort password
        </AnchorTag>

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
