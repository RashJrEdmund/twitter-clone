import React from "react";

import {
  SignInput,
  StyledHeader,
  Overlay,
  CancelBtn,
  StyledTwitterIcon,
} from "../atoms/LoginRegistAtoms";
import SignButton from "../atoms/SignButton";

import AnchorTag from "../atoms/AnchorTag";
import StyledSingIn_Login from "../molecules/StyledSingIn_Login";
import { StrikedText } from "../molecules/Molecules";

import { FcGoogle } from "react-icons/fc";

type Props = {
  open: boolean;
  closeLog: () => void;
  signupModal: () => void;
};

export default function Login({ open, closeLog, signupModal }: Props) {
  return (
    <StyledSingIn_Login open={open}>
      <Overlay />

      <div className="container">
        <CancelBtn onClick={closeLog} />

        <StyledTwitterIcon />

        <StyledHeader color="#000" weight="600" size="30px">
          Sing in to Twitter
        </StyledHeader>

        <SignButton padd="9px 70px" fill={true} weight="300">
          <FcGoogle className="icon" /> Sign in with Google
        </SignButton>
        <SignButton padd="9px 70px" fill={true}>
          Sign in with Apple
        </SignButton>

        <StrikedText>
          <hr />
          or
          <hr />
        </StrikedText>

        <SignInput placeholder="Phone, email address or username" />

        <SignButton color="#fff" bg="#000" padd="9px 70px" fill={true}>
          Next
        </SignButton>

        <SignButton padd="9px 70px" fill={true}>
          Forgot password?
        </SignButton>

        <div className="sign_links">
          <AnchorTag>Don&apos;t have an accont? </AnchorTag>{" "}
          <AnchorTag link={true} onClick={signupModal}>
            Sign up
          </AnchorTag>
        </div>
      </div>
    </StyledSingIn_Login>
  );
}
