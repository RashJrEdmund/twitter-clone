import React from "react";
import StyledSignWidget from "../../molecules/StyledSignWidget";
import {
  StyledApple,
  StyledGoogle,
  StyledHeader,
} from "../../atoms/LoginRegistAtoms";
import SignButton from "../../atoms/SignButton";
import AnchorTag from "../../atoms/AnchorTag";
import { useAuth } from "@/hooks/AuthContext";

type Props = {};

export default function SignWidget({}: Props) {
  const { googleLogin, logFunctions } = useAuth();
  const { signupModal } = logFunctions;

  return (
    <StyledSignWidget>
      <div className="inner_container">
        <StyledHeader color="#000">New to Twitter?</StyledHeader>
        <AnchorTag>sign up now to get your own personalized timeline</AnchorTag>
        <SignButton padd="10px 70px" fill onClick={googleLogin}>
          <span>
            <StyledGoogle />
          </span>
          Sign up with Google
        </SignButton>
        <SignButton padd="10px 70px" fill>
          <span>
            <StyledApple />
          </span>
          Sign up with Apple
        </SignButton>
        <SignButton padd="10px 70px" fill onClick={signupModal}>
          Create account
        </SignButton>

        <div className="sign_links">
          <AnchorTag>By signing up, you agree to the</AnchorTag>{" "}
          <AnchorTag link>Terms of Service</AnchorTag>{" "}
          <AnchorTag>and</AnchorTag> <AnchorTag link>Privacy Policy</AnchorTag>
          {", "}
          <AnchorTag>including</AnchorTag>{" "}
          <AnchorTag link>Cookie Use.</AnchorTag>
        </div>
      </div>

      <div className="gray_links">
        <AnchorTag gray_link>Terms of Service</AnchorTag>
        <AnchorTag gray_link>Privacy Policy</AnchorTag>
        <AnchorTag gray_link>Cookie Policy</AnchorTag>
        <AnchorTag gray_link>Accessibility</AnchorTag>
        <AnchorTag gray_link>Ads info</AnchorTag>
        <AnchorTag gray_link>More ...</AnchorTag>
        <AnchorTag gray_link>© 2023 X Corp.</AnchorTag>
      </div>
    </StyledSignWidget>
  );
}
