import React from "react";

import {
  SignButtons,
  StyledHeader,
  Overlay,
  CloseIcon,
} from "../atoms/LoginRegistAtoms";
import AnchorTag from "../atoms/AnchorTag";
import StyledSingIn_Login from "../molecules/StyledSingIn_Login";

type Props = {};

export default function Signup({}: Props) {
  return (
    <StyledSingIn_Login>
      <Overlay />

      <div className="container">
        <CloseIcon>x</CloseIcon>
        <StyledHeader color="#198ad5" weight="600" size="30px" margin="0 0 20px">
          bird
        </StyledHeader>
        <StyledHeader color="#000" weight="600" size="30px">
          Join Twitter today
        </StyledHeader>

        <SignButtons padd="10px 70px" fill={true} weight="300">
          Sign up with Google
        </SignButtons>
        <SignButtons padd="10px 70px" fill={true}>
          Sign up with Apple
        </SignButtons>

        <AnchorTag>or</AnchorTag>

        <SignButtons color="#fff" bg="#000" padd="10px 70px" fill={true}>
          Create account
        </SignButtons>

        <div className="policy_links">
          <AnchorTag>By signing up, you agree to the</AnchorTag>{" "}
          <AnchorTag link={true}>Terms of Service</AnchorTag>{" "}
          <AnchorTag>and</AnchorTag>{" "}
          <AnchorTag link={true}>Privacy Policy,</AnchorTag>
          {" "}
          <AnchorTag>including</AnchorTag>{" "}
          <AnchorTag link={true}>Cookie Use.</AnchorTag>
        </div>

        <div className="sign_links">
          <AnchorTag>Have an account already?</AnchorTag>{" "}
          <AnchorTag link={true}>Log in</AnchorTag>
        </div>
      </div>
    </StyledSingIn_Login>
  );
}
