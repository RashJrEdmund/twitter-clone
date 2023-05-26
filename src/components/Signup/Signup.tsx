import React from "react";

import {
  SignButtons,
  StyledHeader,
  Overlay,
  CancelBtn,
  StyledTwitterIcon,
} from "../atoms/LoginRegistAtoms";
import AnchorTag from "../atoms/AnchorTag";
import StyledSingIn_Login from "../molecules/StyledSingIn_Login";
import { StrikedText } from "../molecules/Molecules";

type Props = {
  closeLog: any;
};

export default function Signup({ closeLog }: Props) {
  return (
    <StyledSingIn_Login>
      <Overlay />

      <div className="container">
        <CancelBtn onClick={closeLog} />

        <StyledTwitterIcon />

        <StyledHeader color="#000" weight="600" size="30px">
          Join Twitter today
        </StyledHeader>

        <SignButtons padd="9px 70px" fill={true} weight="300">
          Sign up with Google
        </SignButtons>
        <SignButtons padd="9px 70px" fill={true}>
          Sign up with Apple
        </SignButtons>

        <StrikedText>
          <hr />
          or
          <hr />
        </StrikedText>

        <SignButtons color="#fff" bg="#000" padd="9px 70px" fill={true}>
          Create account
        </SignButtons>

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
          <AnchorTag link={true}>Log in</AnchorTag>
        </div>
      </div>
    </StyledSingIn_Login>
  );
}
