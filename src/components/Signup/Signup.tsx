import React from "react";

import {
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
  loginModal: () => void;
};

export default function Signup({ open, closeLog, loginModal }: Props) {
  return (
    <StyledSingIn_Login open={open}>
      <Overlay />

      <div className="container">
        <CancelBtn onClick={closeLog} />

        <StyledTwitterIcon />

        <StyledHeader color="#000" weight="600" size="30px">
          Join Twitter today
        </StyledHeader>

        <SignButton padd="9px 70px" fill={true} weight="300">
          <FcGoogle className="icon" /> Sign up with Google
        </SignButton>
        <SignButton padd="9px 70px" fill={true}>
          Sign up with Apple
        </SignButton>

        <StrikedText>
          <hr />
          or
          <hr />
        </StrikedText>

        <SignButton color="#fff" bg="#000" padd="9px 70px" fill={true}>
          Create account
        </SignButton>

        <div className="policy_links">
          <AnchorTag>By signing up, you agree to the</AnchorTag>{" "}
          <AnchorTag link={true}>Terms of Service</AnchorTag>{" "}
          <AnchorTag>and</AnchorTag>{" "}
          <AnchorTag link={true}>Privacy Policy,</AnchorTag>{" "}
          <AnchorTag>including</AnchorTag>{" "}
          <AnchorTag link={true}>Cookie Use.</AnchorTag>
        </div>

        <div className="sign_links">
          <AnchorTag>Have an account already?</AnchorTag>{" "}
          <AnchorTag link={true} onClick={loginModal}>
            Log in
          </AnchorTag>
        </div>
      </div>
    </StyledSingIn_Login>
  );
}
