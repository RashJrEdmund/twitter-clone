import React from "react";
import StyledSignWidget from "../organisms/StyledSignWidget";
import { StyledHeader } from "../atoms/LoginRegistAtoms";
import SignButton from "../atoms/SignButton";
import AnchorTag from "../atoms/AnchorTag";

type Props = {};

export default function SignWidget({}: Props) {
  return (
    <StyledSignWidget>
      <div className="inner_container">
        <StyledHeader>New to Twitter?</StyledHeader>
        <AnchorTag>sign up now to get your own personalized timeline</AnchorTag>
        <SignButton padd="10px 70px" fill={true}>
          Sign up with Google
        </SignButton>
        <SignButton padd="10px 70px" fill={true}>
          Sign up with Apple
        </SignButton>
        <SignButton padd="10px 70px" fill={true}>
          Create account
        </SignButton>

        <div className="sign_links">
          <AnchorTag>By signing up, you agree to the</AnchorTag>{" "}
          <AnchorTag link={true}>Terms of Service</AnchorTag>{" "}
          <AnchorTag>and</AnchorTag>{" "}
          <AnchorTag link={true}>Privacy Policy</AnchorTag>
          {", "}
          <AnchorTag>including</AnchorTag>{" "}
          <AnchorTag link={true}>Cookie Use.</AnchorTag>
        </div>
      </div>

      <div className="gray_links">
        <AnchorTag gray_link={true}>Terms of Service</AnchorTag>
        <AnchorTag gray_link={true}>Privacy Policy</AnchorTag>
        <AnchorTag gray_link={true}>Cookie Policy</AnchorTag>
        <AnchorTag gray_link={true}>Accessibility</AnchorTag>
        <AnchorTag gray_link={true}>Ads info</AnchorTag>
        <AnchorTag gray_link={true}>More ...</AnchorTag>
        <AnchorTag gray_link={true}>© 2023 X Corp.</AnchorTag>
      </div>
    </StyledSignWidget>
  );
}
