import React from "react";

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
  const { signupWithEmailPassword } = useAuth();

  return (
    <StyledSingIn_Login open={open}>
      <Overlay />

      <div className="container">
        <CancelBtn onClick={closeLog} />

        <StyledTwitterIcon />

        <StyledHeader color="#000" weight="600" size="30px" align="left">
          Enter your phone number or email address
        </StyledHeader>

        <AnchorTag fill align="left">
          userName: something.
        </AnchorTag>

        <SignInput
          placeholder="Phone, email address or username"
          maxW="unset"
        />

        <SignButton
          color="#fff"
          bg="#000"
          padd="9px 70px"
          fill
          maxW="unset"
          margin="5rem 0 0"
        >
          Next
        </SignButton>
      </div>
    </StyledSingIn_Login>
  );
}
