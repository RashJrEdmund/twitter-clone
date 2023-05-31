import React from "react";

import {
  SignInput,
  StyledHeader,
  Overlay,
  CancelBtn,
  StyledTwitterIcon,
  StyledPTag,
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

export default function CreateAccount({ open, closeLog, signupModal }: Props) {
  const { googleLogin } = useAuth();

  return (
    <StyledSingIn_Login open={open}>
      <Overlay />

      <div className="container">
        <CancelBtn onClick={closeLog} />

        <StyledTwitterIcon />

        <StyledHeader color="#000" weight="600" size="30px" align="left">
          Create your account
        </StyledHeader>

        <SignInput placeholder="name" maxW="unset" />

        <SignInput placeholder="phone" maxW="unset" />

        <AnchorTag fill link align="right">
          Use email instead.
        </AnchorTag>

        <StyledPTag>Date of birth</StyledPTag>

        <AnchorTag fill align="left">
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </AnchorTag>

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
