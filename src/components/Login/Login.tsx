import React from "react";

import {
  SignButtons,
  SignInput,
  StyledHeader,
  Overlay,
  CancelBtn,
  StyledTwitterIcon,
} from "../atoms/LoginRegistAtoms";
import AnchorTag from "../atoms/AnchorTag";
import StyledSingIn_Login from "../molecules/StyledSingIn_Login";
import { StrikedText } from "../molecules/Molecules";

type Props = {};

export default function Login({}: Props) {
  return (
    <StyledSingIn_Login>
      <Overlay />

      <div className="container">
        <CancelBtn />

        <StyledTwitterIcon />

        <StyledHeader color="#000" weight="600" size="30px">
          Sing in to Twitter
        </StyledHeader>

        <SignButtons padd="9px 70px" fill={true} weight="300">
          Sign in with Google
        </SignButtons>
        <SignButtons padd="9px 70px" fill={true}>
          Sign in with Apple
        </SignButtons>

        <StrikedText>
          <hr />
          or
          <hr />
        </StrikedText>

        <SignInput placeholder="Phone, email address or username" />

        <SignButtons color="#fff" bg="#000" padd="9px 70px" fill={true}>
          Next
        </SignButtons>

        <SignButtons padd="9px 70px" fill={true}>
          Forgot password?
        </SignButtons>

        <div className="sign_links">
          <AnchorTag>Don&apos;t have an accont? </AnchorTag>{" "}
          <AnchorTag link={true}>Sign up</AnchorTag>
        </div>
      </div>
    </StyledSingIn_Login>
  );
}
