import React from "react";

import {
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
  loginModal: () => void;
};

export default function Signup({ open, closeLog, loginModal }: Props) {
  const {
    userInfo,
    LoginWithEmailPassword,
    signupWithEmailPassword,
    googleLogin,
  } = useAuth();

  return (
    <StyledSingIn_Login open={open}>
      <Overlay />

      <div className="container">
        <CancelBtn onClick={closeLog} />

        <StyledTwitterIcon />

        <StyledHeader color="#000" weight="600" size="30px">
          Join Twitter today
        </StyledHeader>

        <SignButton
          padd="9px 70px"
          fill
          weight="300"
          onClick={googleLogin}
        >
          <span>
            <StyledGoogle />
          </span>
          Sign up with Google
        </SignButton>
        <SignButton padd="9px 70px" fill>
          <span>
            <StyledApple />
          </span>
          Sign up with Apple
        </SignButton>

        <StrikedText>
          <hr />
          or
          <hr />
        </StrikedText>

        <SignButton color="#fff" bg="#000" padd="9px 70px" fill>
          Create account
        </SignButton>

        <div className="policy_links">
          <AnchorTag>By signing up, you agree to the</AnchorTag>{" "}
          <AnchorTag link>Terms of Service</AnchorTag>{" "}
          <AnchorTag>and</AnchorTag>{" "}
          <AnchorTag link>Privacy Policy,</AnchorTag>{" "}
          <AnchorTag>including</AnchorTag>{" "}
          <AnchorTag link>Cookie Use.</AnchorTag>
        </div>

        <div className="sign_links">
          <AnchorTag>Have an account already?</AnchorTag>{" "}
          <AnchorTag link onClick={loginModal}>
            Log in
          </AnchorTag>
        </div>
      </div>
    </StyledSingIn_Login>
  );
}
