"use client";

import React from "react";
import { FooterHeader, StyledPTag } from "../../atoms/LoginRegistAtoms";
import SignButton from "../../atoms/SignButton";

import { StyledFooter } from "./StyledFooter";
import Login from "@/components/Login/Login";
import Signup from "@/components/Signup/Signup";

type Props = {};

export default function Footer({}: Props) {
  const [log, setLog] = React.useState<{ login: boolean; signup: boolean }>({
    login: false,
    signup: false,
  });

  const loginModal = () => setLog({ signup: false, login: true });

  const signupModal = () => setLog({ login: false, signup: true });

  const closeLog = () => setLog({ login: false, signup: false });

  return (
    <>
      {log.login && (
        <Login open={log.login} signupModal={signupModal} closeLog={closeLog} />
      )}
      {log.signup && (
        <Signup open={log.signup} closeLog={closeLog} loginModal={loginModal} />
      )}

      <StyledFooter>
        <div className="footer_text">
          <FooterHeader>Don&apos;t miss what&apos;s happening</FooterHeader>
          <StyledPTag>People on Twitter are the first to know</StyledPTag>
        </div>

        <div className="footer_btns">
          <SignButton bg="none" color="#fff" onClick={loginModal}>
            Log in
          </SignButton>
          <SignButton onClick={signupModal}>Sign up</SignButton>
        </div>
      </StyledFooter>
    </>
  );
}
