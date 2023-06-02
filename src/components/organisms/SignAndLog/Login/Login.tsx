import React from "react";

import {
  SignInput,
  StyledHeader,
  Overlay,
  CancelBtn,
  StyledTwitterIcon,
  StyledGoogle,
  StyledApple,
} from "../../../atoms/LoginRegistAtoms";
import SignButton from "../../../atoms/SignButton";

import AnchorTag from "../../../atoms/AnchorTag";
import StyledSingIn_Login from "../../../molecules/StyledSingIn_Login";
import { StrikedText } from "../../../molecules/Molecules";
import { useAuth } from "@/hooks/AuthContext";

type Props = {
  open: boolean;
  closeLog: () => void;
  signupModal: () => void;
  toEmailPass: () => void;
};

export default function Login({
  closeLog,
  signupModal,
  toEmailPass,
  open,
}: Props) {
  const { googleLogin } = useAuth();
  const [inputVal, setInputVal] = React.useState<string>("");
  const emailReg = /\w{2}[@]\w{3,5}[.]/;
  const phoneReg = /\d{2}/;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!inputVal.trim() || !/\w/.test(inputVal)) {
      console.log("no value found");
      return;
    }

    if (emailReg.test(inputVal)) {
      console.log("email found", inputVal);
      const data = { type: "email", detail: inputVal };
      sessionStorage.setItem("log", JSON.stringify(data));
    } else if (phoneReg.test(inputVal)) {
      console.log("phonenumber found", inputVal);
      const data = { type: "phone", detail: inputVal };
      sessionStorage.setItem("log", JSON.stringify(data));
    } else {
      console.log("username detected", inputVal);
      const data = { type: "username", detail: inputVal };
      sessionStorage.setItem("log", JSON.stringify(data));
    }
    toEmailPass();
  };

  return (
    <StyledSingIn_Login open={open}>
      <Overlay />

      <form className="container" onSubmit={handleSubmit}>
        <CancelBtn onClick={closeLog} />

        <StyledTwitterIcon />

        <StyledHeader color="#000" weight="600" size="30px">
          Sing in to Twitter
        </StyledHeader>

        <SignButton
          padd="9px 70px"
          fill
          weight="300"
          type="button"
          onClick={googleLogin}
        >
          <span>
            <StyledGoogle />
          </span>
          Sign in with Google
        </SignButton>
        <SignButton padd="9px 70px" fill type="button">
          <span>
            <StyledApple />
          </span>
          Sign in with Apple
        </SignButton>

        <StrikedText>
          <hr />
          or
          <hr />
        </StrikedText>

        <SignInput
          placeholder="Phone, email address or username"
          value={inputVal}
          onChange={({ target: { value } }) => setInputVal(value)}
        />

        <SignButton color="#fff" bg="#000" padd="9px 70px" fill type="submit">
          Next
        </SignButton>

        <SignButton padd="9px 70px" fill type="button">
          Forgot password?
        </SignButton>

        <div className="sign_links">
          <AnchorTag>Don&apos;t have an accont? </AnchorTag>{" "}
          <AnchorTag link onClick={signupModal}>
            Sign up
          </AnchorTag>
        </div>
      </form>
    </StyledSingIn_Login>
  );
}
