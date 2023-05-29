import React from "react";

import {
  SignInput,
  StyledHeader,
  Overlay,
  CancelBtn,
  StyledTwitterIcon,
  StyledGoogle,
  StyledApple,
} from "../atoms/LoginRegistAtoms";
import SignButton from "../atoms/SignButton";

import AnchorTag from "../atoms/AnchorTag";
import StyledSingIn_Login from "../molecules/StyledSingIn_Login";
import { StrikedText } from "../molecules/Molecules";
import { useAuth } from "@/hooks/AuthContext";

type Props = {
  open: boolean;
  closeLog: () => void;
  signupModal: () => void;
};

export default function LoginWithEmail_Password({ open, closeLog, signupModal }: Props) {
  const { googleLogin } = useAuth();

  return (
    <StyledSingIn_Login open={open}>
      <Overlay />

      <div className="container">
        <CancelBtn onClick={closeLog} />

        <StyledTwitterIcon />

        <StyledHeader color="#000" weight="600" size="30px">
          Enter your phone number or email address
        </StyledHeader>

        <AnchorTag >userName: something.</AnchorTag>
        
        <SignInput placeholder="Phone, email address or username" />

        <SignButton color="#fff" bg="#000" padd="9px 70px" fill>
          Login
        </SignButton>

        <SignButton padd="9px 70px" fill>
          Forgot password?
        </SignButton>

        <div className="sign_links">
          <AnchorTag>Don&apos;t have an accont? </AnchorTag>{" "}
          <AnchorTag link onClick={signupModal}>
            Sign up
          </AnchorTag>
        </div>
      </div>
    </StyledSingIn_Login>
  );
}
