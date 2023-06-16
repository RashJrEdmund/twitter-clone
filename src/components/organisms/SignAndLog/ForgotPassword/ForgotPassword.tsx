/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import {
  SignInput,
  StyledHeader,
  Overlay,
  CancelBtn,
  StyledTwitterIcon,
} from "../../../atoms/LoginRegistAtoms";
import SignButton from "../../../atoms/SignButton";

import StyledSingIn_Login from "../../../molecules/StyledSingIn_Login";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/configs/firebase";

type Props = {
  open: boolean;
  closeLog: () => void;
  loginModal: () => void;
};

export default function ForgotPassowrd({ closeLog, open, loginModal }: Props) {
  const [formEmail, setFormEmail] = useState<string>("");
  const [formErr, setFormErr] = useState<boolean>(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const emailReg = /\w{2}[@]\w{3,15}[.]/;

  useEffect(() => {
    const sessionData = sessionStorage.getItem("signData");
    if (sessionData) {
      const data = JSON.parse(sessionData);
      setFormEmail(data.email);
    }
  }, []);

  const handleSubmit: (e: any) => void = async (e) => {
    e.preventDefault();
    if (!formEmail.trim() || !emailReg.test(formEmail)) return setFormErr(true);

    await sendPasswordResetEmail(auth, formEmail)
      .then((res) => {
        loginModal();
      })
      .catch(() => setIsValidEmail(false));
  };

  const handleInputField = ({ target: { value } }: any) => {
    setFormEmail(value);

    if (emailReg.test(formEmail)) setIsValidEmail(true);
    else setIsValidEmail(false);
  };

  return (
    <StyledSingIn_Login open={open}>
      <Overlay />

      <form className="container" onSubmit={handleSubmit}>
        <CancelBtn onClick={closeLog} />

        <StyledTwitterIcon />

        <StyledHeader color="#000" weight="600" size="30px" align="left">
          Reset password
        </StyledHeader>

        <SignInput
          placeholder="reset password email"
          maxW="unset"
          type="email"
          error={formErr}
          value={formEmail}
          onChange={handleInputField}
        />

        <SignButton
          color="#fff"
          bg={isValidEmail ? "#198ad5" : "#000000dd"}
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
