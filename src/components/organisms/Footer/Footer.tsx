"use client";

import React, { useEffect } from "react";
import { FooterHeader, StyledPTag } from "../../atoms/LoginRegistAtoms";
import SignButton, { ExtendedSignButton } from "../../atoms/SignButton";

import { StyledFooter } from "./StyledFooter";
import Login from "@/components/organisms/SignAndLog/Login/Login";
import Signup from "@/components/organisms/SignAndLog/Signup/Signup";
import LoginWithEmail_Password from "@/components/organisms/SignAndLog/LoginWithEmail_Password/LoginWithEmail_Password";
import CreateAccount from "../SignAndLog/CreateAccount/CreateAccount";
import { useAuth } from "@/hooks/AuthContext";
import CompleteSingup from "../SignAndLog/CompleteSignup/CompleteSignup";

type Props = { userInfo: any; displayAlert: (msg: string) => void };

function Footer({ userInfo, displayAlert }: Props) {
  type logType = {
    login: boolean;
    signup: boolean;
    emailPass: boolean;
    createAcc: boolean;
    completeSignup: boolean;
    forgotPass?: boolean;
  };

  const [log, setLog] = React.useState<logType>({
    login: false,
    signup: false,
    emailPass: false,
    forgotPass: false,
    createAcc: false,
    completeSignup: false,
  });

  const { logFunctions, logs } = useAuth();

  useEffect(() => {
    displayAlert("testing the alert");
  }, []);

  const { loginModal, signupModal, createAccModal, toEmailPass, closeLog } =
    logFunctions;

  return (
    <>
      {!userInfo && (
        <>
          {logs.login && (
            <Login
              open={logs.login} /* this open attribute is for the modal tag */
              signupModal={signupModal}
              closeLog={closeLog}
              toEmailPass={toEmailPass}
            />
          )}

          {logs.signup && (
            <Signup
              open={logs.signup} /* this open attribute is for the modal tag */
              closeLog={closeLog}
              loginModal={loginModal}
              createAccModal={createAccModal}
            />
          )}

          {logs.emailPass && (
            <LoginWithEmail_Password
              open={
                logs.emailPass
              } /* this open attribute is for the modal tag */
              closeLog={closeLog}
              signupModal={signupModal}
            />
          )}

          {logs.createAcc && (
            <CreateAccount open={logs.createAcc} closeLog={closeLog} />
          )}

          {!logs.completeSignup && (
            <CompleteSingup
              open={logs.createAcc}
              closeLog={closeLog}
              createAccModal={createAccModal}
            />
          )}

          <StyledFooter>
            <div className="center_div">
              <div className="footer_text">
                <FooterHeader>
                  Don&apos;t miss what&apos;s happening
                </FooterHeader>
                <StyledPTag>People on Twitter are the first to know</StyledPTag>
              </div>

              <div className="footer_btns">
                <ExtendedSignButton
                  bg="none"
                  color="#fff"
                  borderColor="#ffffff44"
                  maxScreenQuery="700"
                  onClick={loginModal}
                >
                  Log in
                </ExtendedSignButton>
                <ExtendedSignButton onClick={signupModal} maxScreenQuery="700">
                  Sign up
                </ExtendedSignButton>
              </div>
            </div>
          </StyledFooter>
        </>
      )}
    </>
  );
}

export default Footer;
