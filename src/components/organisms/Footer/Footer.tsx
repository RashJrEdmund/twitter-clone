"use client";

import React from "react";
import { FooterHeader, StyledPTag } from "../../atoms/LoginRegistAtoms";
import SignButton from "../../atoms/SignButton";

import { StyledFooter } from "./StyledFooter";
import Login from "@/components/Login/Login";
import Signup from "@/components/Signup/Signup";
import LoginWithEmail_Password from "@/components/LoginWithEmail_Password/LoginWithEmail_Password";

type Props = { userInfo: any };

function Footer({ userInfo }: Props) {
  const [log, setLog] = React.useState<{
    login: boolean;
    signup: boolean;
    emailPass: boolean;
    forgotPass?: boolean;
  }>({
    login: false,
    signup: false,
    emailPass: false,
    forgotPass: false,
  });

  const loginModal = () =>
    setLog({ signup: false, emailPass: false, login: true });

  const signupModal = () =>
    setLog({ login: false, emailPass: false, signup: true });

  const closeLog = () =>
    setLog({ login: false, signup: false, emailPass: false });

  const toEmailPass = () =>
    setLog({ login: false, signup: false, emailPass: true });

  return (
    <>
      {!userInfo && (
        <>
          {log.login && (
            <Login
              open={log.login}
              signupModal={signupModal}
              closeLog={closeLog}
              toEmailPass={toEmailPass}
            />
          )}

          {log.signup && (
            <Signup
              open={log.signup}
              closeLog={closeLog}
              loginModal={loginModal}
            />
          )}

          {log.emailPass && (
            <LoginWithEmail_Password
              open={log.emailPass}
              closeLog={closeLog}
              signupModal={signupModal}
            />
          )}

          <StyledFooter>
            <div className="footer_text">
              <FooterHeader>Don&apos;t miss what&apos;s happening</FooterHeader>
              <StyledPTag>People on Twitter are the first to know</StyledPTag>
            </div>

            <div className="footer_btns">
              <SignButton
                bg="none"
                color="#fff"
                borderColor="#ffffff44"
                onClick={loginModal}
              >
                Log in
              </SignButton>
              <SignButton onClick={signupModal}>Sign up</SignButton>
            </div>
          </StyledFooter>
        </>
      )}
    </>
  );
}

export default Footer;
