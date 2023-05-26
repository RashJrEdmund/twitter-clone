"use client";

import React from "react";
import {
  FooterHeader,
  SignButtons,
  StyledPTag,
} from "../../atoms/LoginRegistAtoms";

import { StyledFooter } from "./StyledFooter";
import Login from "@/components/Login/Login";
import Signup from "@/components/Signup/Signup";

type Props = {};

export default function Footer({}: Props) {
  const [log, setLog] = React.useState<{ login: boolean; signup: boolean }>({
    login: false,
    signup: false,
  });

  const loging = () => setLog({ signup: false, login: true });

  const signup = () => setLog({ login: false, signup: true });

  const closeLog = () => setLog({ login: false, signup: false });

  return (
    <>
      {log.login && <Login closeLog={closeLog} />}
      {log.signup && <Signup closeLog={closeLog} />}

      <StyledFooter>
        <div className="footer_text">
          <FooterHeader>Don&apos;t miss what&apos;s happening</FooterHeader>
          <StyledPTag>People on Twitter are the first to know</StyledPTag>
        </div>

        <div className="footer_btns">
          <SignButtons bg="none" color="#fff" onClick={loging}>
            Log in
          </SignButtons>
          <SignButtons onClick={signup}>Sign up</SignButtons>
        </div>
      </StyledFooter>
    </>
  );
}
